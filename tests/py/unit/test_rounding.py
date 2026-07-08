import pytest

from mat3ra.utils.rounding import RoundingMethodEnum, round_custom


@pytest.mark.parametrize(
    "value, decimals, method, expected",
    [
        # HalfAwayFromZero: 0.5 rounds up
        (0.5, 0, RoundingMethodEnum.HalfAwayFromZero, 1.0),
        (1.5, 0, RoundingMethodEnum.HalfAwayFromZero, 2.0),
        (2.5, 0, RoundingMethodEnum.HalfAwayFromZero, 3.0),
        (-0.5, 0, RoundingMethodEnum.HalfAwayFromZero, -1.0),
        (-1.5, 0, RoundingMethodEnum.HalfAwayFromZero, -2.0),
        (0.7675, 3, RoundingMethodEnum.HalfAwayFromZero, 0.768),
        (1.23456789, 5, RoundingMethodEnum.HalfAwayFromZero, 1.23457),
        # Bankers: 0.5 rounds to even
        (0.5, 0, RoundingMethodEnum.Bankers, 0.0),
        (1.5, 0, RoundingMethodEnum.Bankers, 2.0),
        (2.5, 0, RoundingMethodEnum.Bankers, 2.0),
        (3.5, 0, RoundingMethodEnum.Bankers, 4.0),
        (-0.5, 0, RoundingMethodEnum.Bankers, 0.0),
        (-1.5, 0, RoundingMethodEnum.Bankers, -2.0),
        # Default is Bankers
        (0.5, 0, None, 0.0),
        (1.5, 0, None, 2.0),
    ],
)
def test_round_custom(value, decimals, method, expected):
    if method is None:
        result = round_custom(value, decimals)
    else:
        result = round_custom(value, decimals, method)
    assert result == expected, f"round_custom({value}, {decimals}, {method}) = {result}, expected {expected}"
