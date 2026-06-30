from decimal import ROUND_HALF_EVEN, ROUND_HALF_UP, Decimal
from enum import Enum


class RoundingMethodEnum(Enum):
    """See: https://en.wikipedia.org/wiki/Rounding"""

    Bankers = ROUND_HALF_EVEN
    HalfAwayFromZero = ROUND_HALF_UP


def round_custom(value, decimals=0, method=RoundingMethodEnum.Bankers):
    """
    Mirrors JS roundCustom from @mat3ra/code/dist/js/math.
    """
    return float(Decimal(str(value)).quantize(Decimal(10) ** -decimals, rounding=method.value))
