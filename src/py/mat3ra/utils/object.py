import copy
import unittest
from enum import Enum
from typing import Any, Callable, Dict, List

import numpy as np

# Overriding the built-in set function to not interfere with object.set in this module
builtin_set = set


def omit(obj: Dict[str, Any], keys: List[str]) -> Dict[str, Any]:
    return {k: v for k, v in obj.items() if k not in keys}


def set(obj: Dict[str, Any], key: str, value: Any) -> None:
    obj[key] = value


def clone_shallow(obj: Any) -> Any:
    return copy.copy(obj)


def clone_deep(obj: Any) -> Any:
    return copy.deepcopy(obj)


def get(config: Dict, path: str = "", separator: str = "/") -> Any:
    """
    Get value by deep/nested path with separator "/ or "."
    """
    segments = path.strip(separator).split(separator)
    for segment in segments:
        config = config.get(segment, {})
    return config


def assert_almost_equal(expected: Any, actual: Any, *args: Any, **kwargs: Any) -> None:
    test_case = unittest.TestCase()
    test_case.assertAlmostEqual(expected, actual, *args, **kwargs)


def assert_equal(expected: Any, actual: Any) -> None:
    test_case = unittest.TestCase()
    test_case.assertEqual(expected, actual)


def assert_deep_almost_equal(expected: Any, actual: Any, *args: Any, **kwargs: Any) -> None:
    """
    Asserts that two complex structures have almost equal contents. Compares lists, dicts and tuples recursively.
    Checks numeric values using assertAlmostEqual() and checks all other values with assertEqual(). Accepts
    additional positional and keyword arguments and passes those intact to assertAlmostEqual().

    Notes:
        Based on: http://stackoverflow.com/a/23550280

    Args:
        expected (dict|list|tuple): expected complex object.
        actual (dict|list|tuple): actual complex object.
    """
    is_root = "__trace" not in kwargs
    trace = kwargs.pop("__trace", "ROOT")
    try:
        if isinstance(expected, (int, float, complex)):
            assert_almost_equal(expected, actual, *args, **kwargs)
        elif isinstance(expected, (str)):
            assert_equal(expected, actual)
        elif isinstance(expected, (list, tuple, np.ndarray)):
            assert_equal(len(expected), len(actual))
            for index in range(len(expected)):
                v1, v2 = expected[index], actual[index]
                assert_deep_almost_equal(v1, v2, __trace=repr(index), *args, **kwargs)
        elif isinstance(expected, dict):
            assert_equal(builtin_set(expected), builtin_set(actual))
            for key in expected:
                assert_deep_almost_equal(expected[key], actual[key], __trace=repr(key), *args, **kwargs)
    except AssertionError as exc:
        exc.__dict__.setdefault("traces", []).append(trace)
        if is_root:
            trace = " -> ".join(reversed(exc.traces))  # type: ignore
            exc = AssertionError("%s\nTRACE: %s" % (str(exc), trace))
        raise exc


def convert_key_and_round(k: Any, v: Any, round_func: Callable[[Any], Any]) -> tuple:
    """
    Convert enum keys to strings and round numeric values for JSON serialization.

    Args:
        k: The key to convert.
        v: The value to convert and round if it's numeric.
        round_func: The rounding function to use for numeric values.

    Returns:
        tuple: A tuple containing the converted key and the rounded value.
    """
    if isinstance(k, Enum):
        k = k.value

    if isinstance(v, (int, float, list, np.ndarray)):
        if isinstance(v, np.ndarray):
            v = v.tolist()
        v = round_func(v)

    return k, v
