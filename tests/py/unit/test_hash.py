import pytest
from pydantic import BaseModel
from typing import Optional

from mat3ra.utils.object import (
    calculate_hash_from_object,
    remove_timestampable_keys,
    sort_keys_deep,
)
from mat3ra.utils.string import remove_comments_from_source_code, remove_empty_lines_from_string


@pytest.mark.parametrize(
    "obj,expected",
    [
        ({"b": 2, "a": 1}, "608de49a4600dbb5b173492759792e4a"),
        ({"z": {"b": 2, "a": 1}, "a": [{"d": 4, "c": 3}, 2]}, "a3f68f53e4bcec2a1b1a058b4a5c12ba"),
        ({"a": None, "b": 1}, "b0ef272d275f68e05645af0b4fac87da"),
        ({"msg": "Δ", "a": 1}, "f838bafaab72679f8607ebc879ab24a7"),
    ],
)
def test_calculate_hash_from_object_matches_js(obj, expected):
    assert calculate_hash_from_object(obj) == expected


def test_sort_keys_deep_sorts_dict_keys_recursively():
    assert sort_keys_deep({"b": 2, "a": 1, "z": {"b": 2, "a": 1}}) == {"a": 1, "b": 2, "z": {"a": 1, "b": 2}}


def test_sort_keys_deep_pydantic_exclude_unset_include_none():
    class Model(BaseModel):
        a: int = 1
        b: Optional[int] = None
        c: Optional[int] = None

    m = Model(c=None)
    assert sort_keys_deep(m) == {"c": None}
    assert calculate_hash_from_object(m) == "adcbf5dd65a518bdff3a02349d151b25"


def test_remove_timestampable_keys():
    assert remove_timestampable_keys(
        {"a": 1, "createdAt": "x", "updatedAt": "y", "removedAt": "z"}
    ) == {"a": 1}


def test_comment_and_empty_line_stripping_matches_js():
    text = "# comment\n\nx=1\n  # indented\n#!/bin/bash\n echo hi # inline\n"
    without_comments = remove_comments_from_source_code(text)
    assert "#!/" in without_comments  # shebang preserved
    assert "echo hi # inline" in without_comments  # inline comment preserved
    assert "comment" not in without_comments

    assert remove_empty_lines_from_string(without_comments) == "x=1\n#!/bin/bash\n echo hi # inline"
