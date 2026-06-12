import re
from typing import Union, Any, Dict, Optional


def convert_js_flags_to_python(flags: str) -> int:
    """
    Convert JavaScript regex flags to Python regex flags.

    :param flags: String containing JavaScript regex flags.
    :return: Python flags for re.compile.
    """
    python_flags = 0

    if "i" in flags:
        python_flags |= re.IGNORECASE
    if "m" in flags:
        python_flags |= re.MULTILINE
    if "s" in flags:
        python_flags |= re.DOTALL

    # Note: JavaScript 'g' flag has no direct equivalent in Python, as Python inherently performs global searches.
    # Note: JavaScript 'u' flag (unicode) is inherently supported in Python 3's re module.
    # Note: JavaScript 'y' flag (sticky) has no direct equivalent in Python.

    return python_flags


def regex_search(content: str, pattern: Union[str, re.Pattern], flags: int = 0, find_all: bool = False) -> Any:
    """
    Regex search utility using finditer.

    Args:
        content: The content to search in.
        pattern: The pattern to search for.
        flags: The regex flags to use for the search.
        find_all: Whether to return all matches or just the first one.

    Returns:
        If find_all=True: Returns a generator iterator for all matches.
        If find_all=False: Returns the first match object or None.
    """
    compiled_pattern = re.compile(pattern, flags) if isinstance(pattern, str) else pattern
    match_iterator = compiled_pattern.finditer(content)

    # multi-match mode
    if find_all:
        return match_iterator

    # single-match mode: return the first occurrence
    match = next(match_iterator, None)
    if not match:
        return None

    # if group_index is not None:
    #     return match.group(group_index)

    return match

def regex_search_by_schema(
    content: str,
    schema: Dict[str, Any],
    param_replacements: Optional[Dict[str, str]] = None,
    find_all: bool = False
) -> Any:
    """
    Executes a regex search using a configuration schema block.
    The schema is based on the regex repo:
    "namelist_block": {
        "regex": "&{{BLOCK_NAME}}\\s*([\\s\\S]*?)\\/",
        "flags": ["i"],
        "params": {
            "BLOCK_NAME": [
                "CONTROL",
                "SYSTEM",
                "ELECTRONS",
                "IONS",
                "CELL",
                "FCP",
                "RISM"
            ]
        }
    }
    Handles schemas that completely omit the 'flags' key.
    """
    regex_pattern = schema["regex"]

    # handle template variable injections (e.g., {{BLOCK_NAME}})
    if param_replacements:
        for placeholder, value in param_replacements.items():
            # Validates that the provided value matches allowed parameters in schema
            allowed_params = schema.get("params", {}).get(placeholder, [])
            if allowed_params and value not in allowed_params:
                raise ValueError(
                    f"Value '{value}' is not an allowed parameter for '{placeholder}'. "
                    f"Expected one of: {allowed_params}"
                )
            regex_pattern = regex_pattern.replace(f"{{{{{placeholder}}}}}", value)

    # handle the flags key (and default to 0 if missing or empty)
    schema_flags = schema.get("flags", [])
    python_flags = convert_js_flags_to_python("".join(schema_flags))

    return regex_search(
        pattern=regex_pattern,
        content=content,
        flags=python_flags,
        find_all=find_all
    )
