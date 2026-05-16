# Helper function to convert dictionaries to SimpleNamespace objects for dot notation access
from types import SimpleNamespace


def dict_to_namespace_recursive(obj):
    if isinstance(obj, dict):
        return SimpleNamespace(**{k: dict_to_namespace_recursive(v) for k, v in obj.items()})
    elif isinstance(obj, list):
        return [dict_to_namespace_recursive(item) for item in obj]
    else:
        return obj
