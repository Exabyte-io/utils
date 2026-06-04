from mat3ra.utils import string as utils
from mat3ra.utils.string import remove_comments_from_source_code


def test_snake_to_camel():
    """
    test_camel_to_snake should be converted to testCamelToSnake
    """
    print(utils.snake_to_camel("test_camel_to_snake"))
    assert utils.snake_to_camel("test_camel_to_snake") == "TestCamelToSnake"


def test_camel_to_snake():
    """
    testCamelToSnake should be converted to test_camel_to_snake
    """
    print(utils.camel_to_snake("testCamelToSnake"))
    assert utils.camel_to_snake("TestCamelToSnake") == "test_camel_to_snake"


def test_remove_comments_from_espresso_input():
    espresso_input = """! This is a Quantum ESPRESSO input block
&SYSTEM
    ibrav = 2
    celldm(1) = 10.26
    nat = 2
    ntyp = 1
    ecutwfc = 40  # this is an inline comment
    ecutrho = 200
/"""

    cleaned_input = remove_comments_from_source_code(espresso_input, language="fortran")
    cleaned_lines = cleaned_input.splitlines()

    # Check that actual code is preserved
    assert "&SYSTEM" in cleaned_lines
    assert any("ibrav = 2" in line for line in cleaned_lines)
    assert any("celldm(1) = 10.26" in line for line in cleaned_lines)
    assert any("nat = 2" in line for line in cleaned_lines)
    assert any("ntyp = 1" in line for line in cleaned_lines)
    assert any("ecutwfc = 40" in line for line in cleaned_lines)
    assert any("ecutrho = 200" in line for line in cleaned_lines)
    # Check that comments are removed
    assert not any("This is a Quantum ESPRESSO input block" in line for line in cleaned_lines)
    assert not any("this is an inline comment" in line for line in cleaned_lines)
