import pytest
from pathlib import Path

from mat3ra.utils.extra import jinja as utils

FILE_JINJA_TEMPLATE_PATH = Path(__file__).parent / "./fixtures/file_jinja_template.jinja"

TEXT_DEGAUSS_VAR = "{{ degauss }}"
TEXT_DOTTED_VAR = "{{ cutoffs.wavefunction }}"
EXPECTED_RAW_DEGAUSS = "{% raw %}{{ degauss }}{% endraw %}"
EXPECTED_RAW_DOTTED = "{% raw %}{{ cutoffs.wavefunction }}{% endraw %}"

CONTENT_DEGAUSS_NUMERIC = "degauss = 0.005\n"
CONTENT_ECUTWFC_JINJA = "ecutwfc = {{ cutoffs.wavefunction }}\n"
CONTENT_NO_MATCH = "no_match = value\n"

PATTERN_DEGAUSS_NUMERIC = r"degauss\s*=\s*[\d.e+\-]+"
PATTERN_ECUTWFC_JINJA = r"ecutwfc\s*=\s*\{\{[^}]+\}\}"
PATTERN_OTHER_NUMERIC = r"other\s*=\s*[\d.e+\-]+"

REPLACEMENT_DEGAUSS_RAW = "degauss = {% raw %}{{ degauss }}{% endraw %}"
REPLACEMENT_ECUTWFC_RAW = "ecutwfc = {% raw %}{{ ecutwfc }}{% endraw %}"
REPLACEMENT_OTHER = "other = x"

EXPECTED_DEGAUSS_REPLACED = "degauss = {% raw %}{{ degauss }}{% endraw %}\n"
EXPECTED_ECUTWFC_REPLACED = "ecutwfc = {% raw %}{{ ecutwfc }}{% endraw %}\n"


def test_render_template():
    context = {"name": "World"}
    rendered = utils.render_template_file(FILE_JINJA_TEMPLATE_PATH, **context)
    assert rendered == "Hello, World!"


def test_render_template_string():
    context = {"name": "World"}
    rendered = utils.render_template_string("Hello, {{ name }}!", **context)
    assert rendered == "Hello, World!"


@pytest.mark.parametrize(
    "text,expected",
    [
        (TEXT_DEGAUSS_VAR, EXPECTED_RAW_DEGAUSS),
        (TEXT_DOTTED_VAR, EXPECTED_RAW_DOTTED),
    ],
)
def test_wrap_in_raw_block(text, expected):
    assert utils.wrap_in_raw_block(text) == expected


@pytest.mark.parametrize(
    "content,pattern,replacement,expected",
    [
        (CONTENT_DEGAUSS_NUMERIC, PATTERN_DEGAUSS_NUMERIC, REPLACEMENT_DEGAUSS_RAW, EXPECTED_DEGAUSS_REPLACED),
        (CONTENT_ECUTWFC_JINJA, PATTERN_ECUTWFC_JINJA, REPLACEMENT_ECUTWFC_RAW, EXPECTED_ECUTWFC_REPLACED),
        (CONTENT_NO_MATCH, PATTERN_OTHER_NUMERIC, REPLACEMENT_OTHER, CONTENT_NO_MATCH),
    ],
)
def test_replace_in_template_content(content, pattern, replacement, expected):
    assert utils.replace_in_template_content(content, pattern, replacement) == expected
