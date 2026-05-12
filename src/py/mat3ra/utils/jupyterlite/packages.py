import json
import os
from typing import List, Optional

from .enums import EnvironmentsEnum
from .environment import ENVIRONMENT
from .logger import log

if ENVIRONMENT == EnvironmentsEnum.PYODIDE:
    import micropip


async def install_init():
    """Pre-load Pyodide built-ins and install pyyaml for config parsing."""
    if ENVIRONMENT != EnvironmentsEnum.PYODIDE:
        return
    
    # Import Pyodide built-ins
    import lzma  # noqa: F401
    import numpy  # noqa: F401
    import pandas  # noqa: F401
    import sympy  # noqa: F401
    import uncertainties  # noqa: F401
    import jinja2  # noqa: F401
    
    # Install pyyaml for config parsing
    await micropip.install("pyyaml")


async def install_package(pkg: str, verbose: bool = True) -> None:
    """Install a single package in Pyodide with appropriate dependency handling."""
    if ENVIRONMENT != EnvironmentsEnum.PYODIDE:
        return

    # Handle nodeps: prefix
    if pkg.startswith("nodeps:"):
        pkg = pkg[7:]
        await micropip.install(pkg, deps=False)
        if verbose:
            log(f"Installed {pkg} (no deps)", force_verbose=verbose)
        return

    # emfs/URL wheels: no deps
    is_local_wheel = pkg.startswith("emfs:/") or pkg.startswith("http://") or pkg.startswith("https://")
    await micropip.install(pkg, deps=not is_local_wheel)
    
    pkg_name = pkg.split("/")[-1].split("-")[0] if is_local_wheel else pkg.split("==")[0].split(">=")[0].split("<")[0]
    if verbose:
        log(f"Installed {pkg_name}", force_verbose=verbose)


def get_config_path(config_file_path: str = "") -> str:
    """Resolve config.yml path (default: /drive/config.yml)."""
    if config_file_path:
        return os.path.normpath(os.path.join(os.getcwd(), config_file_path))
    return "/drive/config.yml"


def get_profile_packages(config_dict: dict, profile: str) -> List[str]:
    """Extract package list for a given profile."""
    profiles = config_dict.get("profiles", {})
    if profile not in profiles:
        raise ValueError(f"Profile '{profile}' not found in config. Available: {list(profiles.keys())}")
    return profiles[profile].get("packages", [])


async def install_packages_with_hashing(packages: List[str], verbose: bool = True) -> None:
    """Install packages with hash-based caching to avoid reinstalls."""
    if ENVIRONMENT != EnvironmentsEnum.PYODIDE:
        if verbose:
            log("Skipping package install (not Pyodide environment).", force_verbose=verbose)
        return

    # Hash requirements to detect changes
    req_hash = str(hash(json.dumps(packages)))
    if os.environ.get("requirements_hash") == req_hash:
        if verbose:
            log("Packages already installed (hash match).", force_verbose=verbose)
        return

    for pkg in packages:
        await install_package(pkg, verbose)

    if verbose:
        log("Packages installed successfully.", force_verbose=verbose)
    os.environ["requirements_hash"] = req_hash


async def install_packages(
    profile: Optional[str] = None,
    config_file_path: str = "",
    verbose: bool = True
) -> None:
    """
    Install packages for the specified profile from config.yml.

    Args:
        profile: Profile name (e.g. "base", "made", "api"). If None, no packages installed.
        config_file_path: Path to config.yml (default: /drive/config.yml).
        verbose: Whether to log install progress.

    Example:
        await install_packages(profile="made")
    """
    if ENVIRONMENT != EnvironmentsEnum.PYODIDE:
        if verbose:
            log("Skipping package install (not Pyodide environment).", force_verbose=verbose)
        return

    if profile is None:
        if verbose:
            log("No profile specified; skipping package install.", force_verbose=verbose)
        return

    await install_init()

    # Import yaml after pyyaml is installed
    import yaml  # type: ignore[import]

    config_path = get_config_path(config_file_path)
    with open(config_path, "r") as f:
        config_dict = yaml.safe_load(f)

    packages = get_profile_packages(config_dict, profile)
    await install_packages_with_hashing(packages, verbose)
