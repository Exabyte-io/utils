/**
 * Reads a YAML file and converts its content to a JSON object.
 * @param {string} filePath - The path to the YAML file.
 * @returns {object} - The resulting JSON object.
 */
export declare function readYAMLFile(filePath: string): object;
/**
 * Writes a JSON object to a YAML file.
 * @param {string} filePath - The path to the YAML file.
 * @param {object} data - The JSON object to write.
 */
export declare function writeYAMLFile(filePath: string, data: object): void;
