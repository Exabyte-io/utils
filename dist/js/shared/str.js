"use strict";
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPreviousVersion =
    exports.convertArabicToRoman =
    exports.removeEmptyLinesFromString =
    exports.removeCommentsFromSourceCode =
    exports.toFixedLocale =
    exports.randomAlphanumeric =
    exports.removeNewLinesAndExtraSpaces =
        void 0;
const coerce_1 = __importDefault(require("semver/functions/coerce"));
const lt_1 = __importDefault(require("semver/functions/lt"));
const rcompare_1 = __importDefault(require("semver/functions/rcompare"));
const underscore_1 = __importDefault(require("underscore"));
function removeNewLinesAndExtraSpaces(str) {
    return str.replace(/[\n\r]/g, "").replace(/  +/g, " ");
}
exports.removeNewLinesAndExtraSpaces = removeNewLinesAndExtraSpaces;
/**
 * @summary Generates random alphanumeric string with a specified length.
 * Returns lowercase string which starts with letter.
 * @param length {Number}
 */
function randomAlphanumeric(length) {
    // numerical value – create random alphanumeric string
    // Start from char at position 2, because Math.random().toString(36) starts with "0."
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    // Random letter is required in generated string because of when
    // the result is used as username and contains only numbers, the
    // slug will be inappropriate (e.g., "user-1232", "user-12" both have "user" as slug).
    return (
        randomLetter +
        Math.random()
            .toString(36)
            .substring(2, 2 + length - 1)
    );
}
exports.randomAlphanumeric = randomAlphanumeric;
function toFixedLocale(number, precision) {
    if (underscore_1.default.isNumber(number)) {
        return number.toFixed(precision).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return number;
}
exports.toFixedLocale = toFixedLocale;
/**
 * @summary Removes lines started with # character. Shebang (#!) is excluded.
 * @param text {String} text to remove comments from.
 * @param language {String} programming language of the text.
 * @return {String}
 */
function removeCommentsFromSourceCode(text, language = "shell") {
    const regexList = {
        shell: /^(\s+)?#(?!!).*$/gm,
    };
    return text.replace(regexList[language], "");
}
exports.removeCommentsFromSourceCode = removeCommentsFromSourceCode;
/**
 * @summary Removes empty lines from a given string.
 * @param string {String} string to remove empty lines from.
 * @return {String}
 */
function removeEmptyLinesFromString(string) {
    // remove "\n" on empty lines AND the very last "\n"
    return string.replace(/^\s*[\r\n]/gm, "").trim();
}
exports.removeEmptyLinesFromString = removeEmptyLinesFromString;
/**
 * converts simple number to roman.
 * @param {Number} num
 * @returns {String} - string
 */
function convertArabicToRoman(num) {
    const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    let str = "";
    // eslint-disable-next-line no-restricted-syntax
    for (const i of Object.keys(roman)) {
        const q = Math.floor(num / roman[i]);
        // eslint-disable-next-line no-param-reassign
        num -= q * roman[i];
        str += i.repeat(q);
    }
    return str;
}
exports.convertArabicToRoman = convertArabicToRoman;
/**
 * Find the next smallest version from a list of semantic version strings.
 * @param {string[]} versions - Array of semantic version strings.
 * @param {string} inputVersion - Version to compare to.
 * @returns {string | undefined}
 */
function findPreviousVersion(versions, inputVersion) {
    const version = (0, coerce_1.default)(inputVersion);
    const versions_ = versions
        .map((v) => ({ raw: v, coerced: (0, coerce_1.default)(v) }))
        .sort((a, b) => (0, rcompare_1.default)(a.coerced, b.coerced));
    const prev = versions_.find((o) => (0, lt_1.default)(o.coerced, version));
    return prev === null || prev === void 0 ? void 0 : prev.raw;
}
exports.findPreviousVersion = findPreviousVersion;
