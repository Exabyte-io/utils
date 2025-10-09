"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeYAMLFile = exports.writeYAMLFileSync = exports.readYAMLFile = exports.readYAMLFileSync = void 0;
const fs_1 = __importDefault(require("fs"));
const yaml_1 = require("../shared/yaml");
/**
 * Reads a YAML file and converts its content to a JSON object.
 * @param {string} filePath - The path to the YAML file.
 * @returns {object} - The resulting JSON object.
 */
function readYAMLFileSync(filePath, options = {}) {
    const YAMLContent = fs_1.default.readFileSync(filePath, "utf8");
    return (0, yaml_1.convertYAMLStringToJSON)(YAMLContent, options);
}
exports.readYAMLFileSync = readYAMLFileSync;
exports.readYAMLFile = readYAMLFileSync;
/**
 * Writes a JSON object to a YAML file.
 * @param {string} filePath - The path to the YAML file.
 * @param {object} [options] - Options for YAML dump (see js-yaml documentation).
 * @param {object} data - The JSON object to write.
 */
function writeYAMLFileSync(filePath, data, options) {
    const YAMLContent = (0, yaml_1.convertJSONToYAMLString)(data, options);
    fs_1.default.writeFileSync(filePath, YAMLContent);
}
exports.writeYAMLFileSync = writeYAMLFileSync;
exports.writeYAMLFile = writeYAMLFileSync;
