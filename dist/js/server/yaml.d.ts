/**
 * Reads a YAML file and converts its content to a JSON object.
 * @param {string} filePath - The path to the YAML file.
 * @returns {object} - The resulting JSON object.
 */
export declare function readYAMLFileSync(filePath: string): object;
export declare const readYAMLFile: typeof readYAMLFileSync;
/**
 * Writes a JSON object to a YAML file.
 * @param {string} filePath - The path to the YAML file.
 * @param {object} [options] - Options for YAML dump (see js-yaml documentation).
 * @param {object} data - The JSON object to write.
 */
export declare function writeYAMLFileSync(filePath: string, data: object, options?: object): void;
export declare const writeYAMLFile: typeof writeYAMLFileSync;
