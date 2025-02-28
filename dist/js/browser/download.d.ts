export declare function saveStringDataToFile(strData: string, filename?: string): void;
/**
 * Save image data file with type
 * @param {String} imgData
 * @param {String} filename
 */
export declare function saveImageDataToFile(imgData: string, filename?: string): void;
/**
 * Exports and downloads the content.
 * @param content {String} Content to be saved in downloaded file
 * @param name {String} File name to be written on disk.
 * @param extension {String} File extension.
 * @param mime {String} type of the content.
 * Source: https://github.com/kennethjiang/js-file-download/blob/master/file-download.js
 */
export declare const exportToDisk: (content: string, name?: string, extension?: string, mime?: string) => void;
