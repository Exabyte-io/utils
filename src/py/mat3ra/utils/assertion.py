from typing import Any
import numpy as np
def assert_almost_equal_numbers(expected: (int, float, complex), actual: Any, *args: Any, **kwargs: Any) -> None:
    """
    Assert that two values are almost equal within tolerance.

    Args:
        expected (Any): The expected value.
        actual (Any): The actual value.
        *args (Any): Additional positional arguments for np.isclose (e.g. rtol, atol).
        **kwargs (Any): Additional keyword arguments for np.isclose.
    """
    if not np.isclose(expected, actual, *args, **kwargs):
        raise AssertionError(f"Expected {expected} and actual {actual} are not almost equal.")


def assert_equal(expected: (str, int, list, set), actual: (str, int, list, set)) -> None:
    """
    Assert that two values are equal.

    Args:
        expected (Any): The expected value.
        actual (Any): The actual value.
    """
    if expected != actual:
        raise AssertionError(f"Expected {expected} and actual {actual} are not equal.")


def assert_deep_almost_equal(expected: Any, actual: Any, *args: Any, **kwargs: Any) -> None:
    """
    Asserts that two complex structures have almost equal contents. Compares lists, dicts, and tuples recursively.
    Checks numeric values using assertAlmostEqual() and checks all other values with assertEqual(). Accepts
    additional positional and keyword arguments and passes those intact to assertAlmostEqual().

    Notes:
        Based on: https://stackoverflow.com/a/23550280

    Args:
        expected (Union[Dict[str, Any], List[Any], Tuple[Any], int, float, complex, str]): The expected complex object.
        actual (Union[Dict[str, Any], List[Any], Tuple[Any], int, float, complex, str]): The actual complex object.
    """
    is_root = "__trace" not in kwargs
    trace = kwargs.pop("__trace", "ROOT")
    try:
        if isinstance(expected, (int, float, complex)):
            assert_almost_equal_numbers(expected, actual, *args, **kwargs)
        elif isinstance(expected, str):
            assert_equal(expected, actual)
        elif isinstance(expected, (list, tuple, np.ndarray)):
            assert_equal(len(expected), len(actual))
            for index in range(len(expected)):
                v1, v2 = expected[index], actual[index]
                assert_deep_almost_equal(v1, v2, __trace=repr(index), *args, **kwargs)
        elif isinstance(expected, dict):
            assert_equal(set(expected), set(actual))
            for key in expected:
                assert_deep_almost_equal(expected[key], actual[key], __trace=repr(key), *args, **kwargs)
    except AssertionError as exc:
        exc.__dict__.setdefault("traces", []).append(trace)
        if is_root:
            trace = " -> ".join(reversed(exc.traces))  # type: ignore
            exc = AssertionError("%s\nTRACE: %s" % (str(exc), trace))
        raise exc

