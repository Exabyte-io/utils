import re
from typing import Union, Any


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
