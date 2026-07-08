from decimal import ROUND_HALF_EVEN, ROUND_HALF_UP, Decimal
from enum import Enum


class RoundingMethodEnum(Enum):
    """
    Rounding modes using Python's decimal module constants.
    Bankers (round half to even) is the default — matches np.round and built-in round().
    See: https://en.wikipedia.org/wiki/Rounding#Rounding_half_to_even
    """

    Bankers = ROUND_HALF_EVEN
    HalfAwayFromZero = ROUND_HALF_UP


def round_custom(value, decimals=0, method=RoundingMethodEnum.Bankers):
    """
    Round a number to the specified number of decimal places.
    Uses decimal.Decimal.quantize() for correctness. Defaults to Bankers rounding (round half to even).

    Args:
        value: The number to round.
        decimals: Number of decimal places (default: 0).
        method: Rounding method from RoundingMethodEnum (default: Bankers).

    Returns:
        The rounded value as a float.
    """
    return float(Decimal(str(value)).quantize(Decimal(10) ** -decimals, rounding=method.value))
