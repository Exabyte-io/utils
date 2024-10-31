import urllib


def is_url(url):
    """
    Check whether the provided string is a valid url.

    Args:
        url (str): The provided string to check.

    Returns:
        bool: True if the provided string is a valid url, False otherwise.
    """
    try:
        parts = urllib.parse.urlparse(url)
        scheme = parts[0]
        netloc = parts[1]
        if scheme and netloc:
            return True
        else:
            return False
    except (ValueError, IndexError):
        return False
