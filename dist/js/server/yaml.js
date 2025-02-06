"use strict";
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeYAMLFile = exports.readYAMLFile = void 0;
const fs_1 = __importDefault(require("fs"));
const str_1 = require("../shared/str");
/**
 * Reads a YAML file and converts its content to a JSON object.
 * @param {string} filePath - The path to the YAML file.
 * @returns {object} - The resulting JSON object.
 */
function readYAMLFile(filePath) {
    const YAMLContent = fs_1.default.readFileSync(filePath, "utf8");
    return (0, str_1.convertYAMLStringToJSON)(YAMLContent);
}
exports.readYAMLFile = readYAMLFile;
/**
 * Writes a JSON object to a YAML file.
 * @param {string} filePath - The path to the YAML file.
 * @param {object} data - The JSON object to write.
 */
function writeYAMLFile(filePath, data) {
    const YAMLContent = (0, str_1.convertJSONToYAMLString)(data);
    fs_1.default.writeFileSync(filePath, YAMLContent);
}
exports.writeYAMLFile = writeYAMLFile;
