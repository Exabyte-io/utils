from mat3ra.utils.namespace import dict_to_namespace_recursive

VALUE_1 = "value1"
VALUE_2 = "nested_value1"
VALUE_3 = [1, 2, None, 4]

NESTED_REFERENCE_OBJECT = {
    "key1": VALUE_1,
    "key2": None,
    "key3": {
        "nested_key1": VALUE_2,
        "nested_key2": None,
    },
    "key4": VALUE_3,
}


def test_dict_to_namespace_recursive():
    namespace_obj = dict_to_namespace_recursive(NESTED_REFERENCE_OBJECT)

    assert namespace_obj.key1 == VALUE_1
    assert namespace_obj.key2 is None
    assert namespace_obj.key3.nested_key1 == VALUE_2
    assert namespace_obj.key3.nested_key2 is None
    assert namespace_obj.key4 == VALUE_3
