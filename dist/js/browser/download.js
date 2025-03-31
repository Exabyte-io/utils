"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportToDisk = exports.saveImageDataToFile = exports.saveFile = void 0;
function saveFile(strData, filename) {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.download = filename;
    link.href = strData;
    link.click();
    document.body.removeChild(link);
}
exports.saveFile = saveFile;
function saveImageDataToFile(imgData, type = "png") {
    try {
        saveFile(imgData, `screenshot.${type}`);
    }
    catch (e) {
        console.error(e);
    }
}
exports.saveImageDataToFile = saveImageDataToFile;
/**
 * Exports and downloads the content.
 * @param content {String} Content to be saved in downloaded file
 * @param name {String} File name to be written on disk.
 * @param extension {String} File extension.
 * @param mime {String} type of the content.
 * Source: https://github.com/kennethjiang/js-file-download/blob/master/file-download.js
 */
const exportToDisk = function exportToDisk(content, name = "file", extension = "txt", mime = "application/octet-stream") {
    const blob = new Blob([content], { type: mime });
    const filename = `${name}.${extension}`;
    // @ts-ignore
    if (typeof window.navigator.msSaveBlob !== "undefined") {
        // IE workaround for "HTML7007: One or more blob URLs were
        // revoked by closing the blob for which they were created.
        // These URLs will no longer resolve as the data backing
        // the URL has been freed."
        // @ts-ignore
        window.navigator.msSaveBlob(blob, filename);
    }
    else {
        const blobURL = window.URL.createObjectURL(blob);
        const tempLink = document.createElement("a");
        tempLink.style.display = "none";
        tempLink.href = blobURL;
        tempLink.setAttribute("download", filename);
        // Safari thinks _blank anchor are pop ups. We only want to set _blank
        // target if the browser does not support the HTML5 download attribute.
        // This allows you to download files in desktop safari if pop up blocking
        // is enabled.
        if (typeof tempLink.download === "undefined")
            tempLink.setAttribute("target", "_blank");
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(blobURL);
    }
};
exports.exportToDisk = exportToDisk;
