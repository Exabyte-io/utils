"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateHashFromObject = exports.calculateHashFromString = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const object_1 = require("./object");
/**
 * @summary Calculates hash of a given text.
 */
function calculateHashFromString(message, hashFunction = "MD5") {
    switch (hashFunction) {
        case "MD5":
        default:
            return crypto_js_1.default.MD5(message).toString();
    }
}
exports.calculateHashFromString = calculateHashFromString;
/**
 * @summary Calculates hash of a given object.
 * @param obj object to hash. It must be serializable.
 * @param hashFunction hash function name.
 */
function calculateHashFromObject(obj, hashFunction = "MD5") {
    const message = JSON.stringify((0, object_1.sortKeysDeepForObject)(obj));
    return calculateHashFromString(message, hashFunction);
}
exports.calculateHashFromObject = calculateHashFromObject;
