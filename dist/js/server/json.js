"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeJSONFileSync = exports.readJSONFileSync = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const file_1 = require("./file");
function readJSONFileSync(filePath) {
    const content = fs_1.default.readFileSync(filePath, "utf-8");
    return JSON.parse(content);
}
exports.readJSONFileSync = readJSONFileSync;
function writeJSONFileSync(filePath, data, { replacer, spaces = 0, addNewLine = true } = {}) {
    (0, file_1.createDirIfNotExistsSync)(path_1.default.dirname(filePath));
    const json = JSON.stringify(data, replacer, spaces) + (addNewLine ? "\n" : "");
    fs_1.default.writeFileSync(filePath, json, "utf-8");
}
exports.writeJSONFileSync = writeJSONFileSync;
