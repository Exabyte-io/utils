from pathlib import Path
from mat3ra.utils.extra import jinja as utils

FILE_JINJA_TEMPLATE_PATH = Path(__file__).parent / "./fixtures/file_jinja_template.jinja"

def test_render_template():
    """
    test_camel_to_snake should be converted to testCamelToSnake
    """
    context = {"name": "World"}
    rendered = utils.render_template_file(FILE_JINJA_TEMPLATE_PATH, **context)
    assert rendered == "Hello, World!"