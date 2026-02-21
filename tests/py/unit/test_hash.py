import hashlib
import json

import mat3ra.utils.hash as hash_utils


def test_calculate_hash_from_string_default_md5():
    message = "hello world"
    expected = hashlib.md5(message.encode()).hexdigest()
    assert hash_utils.calculate_hash_from_string(message) == expected


def test_calculate_hash_from_string_with_algorithm():
    message = "hello world"
    expected = hashlib.sha1(message.encode()).hexdigest()
    assert hash_utils.calculate_hash_from_string(message, "sha1") == expected


def test_calculate_hash_from_object_sorts_keys():
    obj = {
        "b": 1,
        "a": {"d": 4, "c": 3},
        "list": [{"y": 2, "x": 1}, 3],
    }
    sorted_obj = {"a": {"c": 3, "d": 4}, "b": 1, "list": [{"x": 1, "y": 2}, 3]}
    expected_message = json.dumps(sorted_obj, separators=(",", ":"), ensure_ascii=False)
    expected = hashlib.md5(expected_message.encode()).hexdigest()
    assert hash_utils.calculate_hash_from_object(obj) == expected
