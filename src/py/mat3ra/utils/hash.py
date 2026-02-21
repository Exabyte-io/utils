import hashlib
import json
from typing import Any


def _sort_keys_deep(obj: Any) -> Any:
    if isinstance(obj, dict):
        return {key: _sort_keys_deep(obj[key]) for key in sorted(obj)}
    if isinstance(obj, list):
        return [_sort_keys_deep(item) for item in obj]
    return obj


def _get_hasher(hash_function: str):
    try:
        return getattr(hashlib, (hash_function or "md5").lower())()
    except (AttributeError, TypeError, ValueError):
        return hashlib.md5()


def calculate_hash_from_string(message: str, hash_function: str = "MD5") -> str:
    """
    Calculates hash of a given text.
    """
    hasher = _get_hasher(hash_function)
    hasher.update(message.encode())
    return hasher.hexdigest()


def calculate_hash_from_object(obj: Any, hash_function: str = "MD5") -> str:
    """
    Calculates hash of a given object. It must be serializable.
    """
    sorted_obj = _sort_keys_deep(obj)
    message = json.dumps(sorted_obj, separators=(",", ":"), ensure_ascii=False)
    return calculate_hash_from_string(message, hash_function)
