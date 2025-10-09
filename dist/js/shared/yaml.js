"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertJSONToYAMLString = exports.convertYAMLStringToJSON = void 0;
const js_yaml_1 = __importDefault(require("js-yaml"));
/**
 * Converts a YAML string to a JSON object.
 * @param {string} YAMLString - The YAML string to convert.
 * @returns {object} - The resulting JSON object.
 */
function convertYAMLStringToJSON(YAMLString, options = {}) {
    return js_yaml_1.default.load(YAMLString, options);
}
exports.convertYAMLStringToJSON = convertYAMLStringToJSON;
/**
 * Converts a JSON object to a YAML string.
 * @param {object} data - The JSON object to convert.
 * @param {object} options - Options for YAML dump (see js-yaml documentation).
 * @returns {string} - The resulting YAML string.
 */
function convertJSONToYAMLString(data, options = {}) {
    return js_yaml_1.default.dump(data, { ...options });
}
exports.convertJSONToYAMLString = convertJSONToYAMLString;
