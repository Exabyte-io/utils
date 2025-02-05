import fs from "fs";
import yaml from "js-yaml";

/**
 * Converts a YAML string to a JSON object.
 * @param {string} YAMLString - The YAML string to convert.
 * @returns {object} - The resulting JSON object.
 */
export function convertYAMLStringToJSON(YAMLString: string): object {
    return yaml.load(YAMLString) as object;
}

/**
 * Reads a YAML file and converts its content to a JSON object.
 * @param {string} filePath - The path to the YAML file.
 * @returns {object} - The resulting JSON object.
 */
export function readYAMLFile(filePath: string): object {
    const YAMLContent = fs.readFileSync(filePath, "utf8");
    return convertYAMLStringToJSON(YAMLContent);
}

/**
 * Converts a JSON object to a YAML string.
 * @param {object} data - The JSON object to convert.
 * @returns {string} - The resulting YAML string.
 */
export function convertJSONToYAMLString(data: object): string {
    return yaml.dump(data);
}

/**
 * Writes a JSON object to a YAML file.
 * @param {string} filePath - The path to the YAML file.
 * @param {object} data - The JSON object to write.
 */
export function writeYAMLFile(filePath: string, data: object) {
    const YAMLContent = convertJSONToYAMLString(data);
    fs.writeFileSync(filePath, YAMLContent);
}
