import pytest
from pathlib import Path

from mat3ra.utils.extra import jinja as utils

FILE_JINJA_TEMPLATE_PATH = Path(__file__).parent / "./fixtures/file_jinja_template.jinja"

JINJA_EXPRESSION_PATTERN = r"\{\{[^}]+\}\}"
NUMERIC_VALUE_PATTERN = r"[\d.e+\-]+"

WRAP_IN_RAW_BLOCK_CASES = [
    pytest.param("{{ degauss }}", "{% raw %}{{ degauss }}{% endraw %}", id="simple_variable"),
    pytest.param("{{ cutoffs.wavefunction }}", "{% raw %}{{ cutoffs.wavefunction }}{% endraw %}", id="dotted_variable"),
]

REPLACE_IN_TEMPLATE_CONTENT_CASES = [
    pytest.param(
        "degauss = 0.005\n",
        r"degauss\s*=\s*[\d.e+\-]+",
        "degauss = {% raw %}{{ degauss }}{% endraw %}",
        "degauss = {% raw %}{{ degauss }}{% endraw %}\n",
        id="replace_numeric_value",
    ),
    pytest.param(
        "ecutwfc = {{ cutoffs.wavefunction }}\n",
        r"ecutwfc\s*=\s*\{\{[^}]+\}\}",
        "ecutwfc = {% raw %}{{ ecutwfc }}{% endraw %}",
        "ecutwfc = {% raw %}{{ ecutwfc }}{% endraw %}\n",
        id="replace_jinja_expression",
    ),
    pytest.param("no_match = value\n", r"other\s*=\s*[\d.e+\-]+", "other = x", "no_match = value\n", id="no_match"),
]


def test_render_template():
    context = {"name": "World"}
    rendered = utils.render_template_file(FILE_JINJA_TEMPLATE_PATH, **context)
    assert rendered == "Hello, World!"


def test_render_template_string():
    context = {"name": "World"}
    rendered = utils.render_template_string("Hello, {{ name }}!", **context)
    assert rendered == "Hello, World!"


@pytest.mark.parametrize("text,expected", WRAP_IN_RAW_BLOCK_CASES)
def test_wrap_in_raw_block(text, expected):
    assert utils.wrap_in_raw_block(text) == expected


@pytest.mark.parametrize("content,pattern,replacement,expected", REPLACE_IN_TEMPLATE_CONTENT_CASES)
def test_replace_in_template_content(content, pattern, replacement, expected):
    assert utils.replace_in_template_content(content, pattern, replacement) == expected
