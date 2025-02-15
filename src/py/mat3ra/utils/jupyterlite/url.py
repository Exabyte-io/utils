from .enums import EnvironmentsEnum
from .environment import ENVIRONMENT


def read_from_url_python(url: str) -> str:
    """
    Fetch, read and decode content from a URL in a Python environment.

    Args:
        url (str): The URL to fetch from.

    Returns:
        str: The content as a decoded string.
    """
    import urllib.request

    with urllib.request.urlopen(url) as response:
        return response.read().decode('utf-8')

async def read_from_url_pyodide(url: str) -> str:
    """
    Fetch and read content from a URL in a Pyodide environment.

    Args:
        url (str): The URL to fetch from.

    Returns:
        str: The content as a string.
    """
    # `http` is a Pyodide module that will be installed in the Pyodide environment by default.
    from pyodide.http import open_url

    response = open_url(url)
    return response.getvalue()

async def read_from_url(url: str) -> str:
    """
    Read content from a URL, handling both Python and Pyodide environments.

    Args:
        url (str): The URL to fetch from.

    Returns:
        str: The content as a string.
    """
    response = None
    if ENVIRONMENT == EnvironmentsEnum.PYODIDE:
        response = await read_from_url_pyodide(url)
    elif ENVIRONMENT == EnvironmentsEnum.PYTHON:
        response = read_from_url_python(url)

    return response