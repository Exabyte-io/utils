from typing import Any, Dict, List
import copy


def omit(obj: Dict[str, Any], keys: List[str]) -> Dict[str, Any]:
    return {k: v for k, v in obj.items() if k not in keys}


def set(obj: Dict[str, Any], key: str, value: Any) -> None:
    obj[key] = value


def clone_shallow(obj: Any) -> Any:
    return copy.copy(obj)


def clone_deep(obj: Any) -> Any:
    return copy.deepcopy(obj)
