import yaml from "js-yaml";

/**
 * Converts a YAML string to a JSON object.
 * @param {string} YAMLString - The YAML string to convert.
 * @returns {object} - The resulting JSON object.
 */
export function convertYAMLStringToJSON(YAMLString) {
    return yaml.load(YAMLString);
}

/**
 * Converts a JSON object to a YAML string.
 * @param {object} data - The JSON object to convert.
 * @returns {string} - The resulting YAML string.
 */
export function convertJSONToYAMLString(data) {
    return yaml.dump(data);
}
