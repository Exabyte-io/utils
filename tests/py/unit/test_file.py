from mat3ra.utils import file as utils

REFERENCE_FILE_CONTENT = """Content Line 1
Content Line 2
Content Line 3
"""


def test_file_get_content():
    """
    test_camel_to_snake should be converted to testCamelToSnake
    """
    content = utils.file_get_content("./fixtures/file_with_content.txt")
    assert content == REFERENCE_FILE_CONTENT
