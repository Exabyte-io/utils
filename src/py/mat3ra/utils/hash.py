import hashlib
import json
import warnings
from typing import Any, Optional


def _sort_keys_deep(obj: Any) -> Any:
    if isinstance(obj, dict):
        return {key: _sort_keys_deep(obj[key]) for key in sorted(obj)}
    if isinstance(obj, list):
        return [_sort_keys_deep(item) for item in obj]
    return obj


def _get_hasher(hash_function: Optional[str]) -> Any:
    algorithm = (hash_function or "md5").lower()
    try:
        return getattr(hashlib, algorithm)()
    except (AttributeError, TypeError, ValueError):
        if algorithm != "md5":
            warnings.warn(f"Hash function '{hash_function}' unavailable. Falling back to MD5.", RuntimeWarning)
        return hashlib.md5()


def calculate_hash_from_string(message: str, hash_function: str = "md5") -> str:
    """
    Calculates hash of a given text.

    Defaults to MD5 for parity with the legacy JS utilities and falls back to MD5 if the
    requested algorithm is unavailable. Not intended for security-sensitive use or any
    scenario where collision resistance matters.

    Args:
        message: Input text to hash.
        hash_function: Hash function name. Falls back to MD5 if unavailable.

    Returns:
        str: Hex digest of the hashed message.
    """
    hasher = _get_hasher(hash_function)
    hasher.update(message.encode())
    return hasher.hexdigest()


def calculate_hash_from_object(obj: Any, hash_function: str = "md5") -> str:
    """
    Calculates hash of a given object. It must be serializable.

    Keys are sorted recursively before hashing to ensure deterministic output.

    Args:
        obj: Serializable object to hash.
        hash_function: Hash function name. Falls back to MD5 if unavailable.

    Returns:
        str: Hex digest of the hashed object representation.
    """
    sorted_obj = _sort_keys_deep(obj)
    message = json.dumps(sorted_obj, separators=(",", ":"), ensure_ascii=False)
    return calculate_hash_from_string(message, hash_function)
