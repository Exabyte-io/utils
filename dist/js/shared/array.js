"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToCompactCSVArrayOfObjects = exports.safeMakeArray = void 0;
const flatten_1 = __importDefault(require("lodash/flatten"));
const isArray_1 = __importDefault(require("lodash/isArray"));
const keys_1 = __importDefault(require("lodash/keys"));
const uniq_1 = __importDefault(require("lodash/uniq"));
function safeMakeArray(x) {
    if (!(0, isArray_1.default)(x))
        return [x];
    return x;
}
exports.safeMakeArray = safeMakeArray;
/**
 * @summary Returns objects array in compact csv format. E.g.:
 * [{a: 1, b: 2}, {a: 2, d: 3}] -> [['a','b','d'],[1, 2, null], [2, null, 3]]
 * @param objects
 */
function convertToCompactCSVArrayOfObjects(objects) {
    const headers = (0, uniq_1.default)((0, flatten_1.default)(objects.map((x) => (0, keys_1.default)(x))));
    const result = [headers];
    objects.forEach((x) => {
        const row = [];
        headers.forEach((header) => {
            // eslint-disable-next-line no-prototype-builtins
            row.push(x.hasOwnProperty(header) ? x[header] : null);
        });
        result.push(row);
    });
    return result;
}
exports.convertToCompactCSVArrayOfObjects = convertToCompactCSVArrayOfObjects;
