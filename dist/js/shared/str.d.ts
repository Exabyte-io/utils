export function removeNewLinesAndExtraSpaces(str: any): any;
/**
 * @summary Generates random alphanumeric string with a specified length.
 * Returns lowercase string which starts with letter.
 * @param length {Number}
 */
export function randomAlphanumeric(length: number): string;
export function toFixedLocale(number: any, precision: any): any;
/**
 * @summary Removes lines started with # character. Shebang (#!) is excluded.
 * @param text {String} text to remove comments from.
 * @param language {String} programming language of the text.
 * @return {String}
 */
export function removeCommentsFromSourceCode(text: string, language?: string): string;
/**
 * @summary Removes empty lines from a given string.
 * @param string {String} string to remove empty lines from.
 * @return {String}
 */
export function removeEmptyLinesFromString(string: string): string;
/**
 * converts simple number to roman.
 * @param {Number} num
 * @returns {String} - string
 */
export function convertArabicToRoman(num: number): string;
/**
 * Find the next smallest version from a list of semantic version strings.
 * @param {string[]} versions - Array of semantic version strings.
 * @param {string} inputVersion - Version to compare to.
 * @returns {string | undefined}
 */
export function findPreviousVersion(versions: string[], inputVersion: string): string | undefined;
