from mat3ra.utils import url as utils


def test_is_url():
    assert utils.is_url("https://google.com") == True
    assert utils.is_url("test_string") == False
