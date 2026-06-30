import numpy as np

from mat3ra.utils.rounding import RoundingMethodEnum, round_custom


class RoundNumericValuesMixin(object):
    # Default rounding precision in decimal places
    __round_precision__ = 9

    @classmethod
    def round_array_or_number(cls, array, decimal_places=None, retain_sign_for_zero=False, method=RoundingMethodEnum.Bankers):
        decimal_places = cls.__round_precision__ if decimal_places is None else decimal_places
        vectorized_round = np.vectorize(lambda v: round_custom(v, decimal_places, method))
        rounded_array = vectorized_round(np.asarray(array))
        resulting_ndarray = rounded_array
        if not retain_sign_for_zero:
            resulting_ndarray = np.where(rounded_array == 0, 0.0, rounded_array)
        return resulting_ndarray.tolist()
