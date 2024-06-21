"use strict";
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanDirectory =
    exports.createDirIfNotExists =
    exports.createObjectPathFromFilePath =
    exports.getDirectories =
    exports.getFilesInDirectory =
    exports.formatFileSize =
    exports.getProgrammingLanguageFromFileExtension =
        void 0;
const fs_1 = __importDefault(require("fs"));
const promises_1 = require("node:fs/promises");
const node_path_1 = __importDefault(require("node:path"));
const FILE_EXTENSION_TO_PROGRAMMING_LANGUAGE_MAP = {
    in: "fortran",
    sh: "shell",
    bash: "shell",
    zsh: "shell",
    pbs: "shell",
    py: "python",
};
/**
 * @summary Identifies language by file extension. Uses 'fortran' by default.
 */
function getProgrammingLanguageFromFileExtension(filename, defaultLanguage = "fortran") {
    var _a;
    const fileExt =
        (_a = filename.split(".").pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (!fileExt) {
        return defaultLanguage;
    }
    return FILE_EXTENSION_TO_PROGRAMMING_LANGUAGE_MAP[fileExt] || defaultLanguage;
}
exports.getProgrammingLanguageFromFileExtension = getProgrammingLanguageFromFileExtension;
/**
 * @summary Formats a given file size.
 * @param size file size.
 * @param decimals number of decimals to round.
 */
function formatFileSize(size, decimals = 2) {
    if (size === 0) return "0 Bytes";
    const index = Math.floor(Math.log(size) / Math.log(1024));
    const units = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    return parseFloat((size / 1024 ** index).toFixed(decimals)) + " " + units[index];
}
exports.formatFileSize = formatFileSize;
/** Get list of paths for files in a directory and filter by file extensions if provided.
 * @param dirPath - Path to current directory, i.e. $PWD
 * @param fileExtensions - File extensions to filter, e.g. `.yml`
 * @param resolvePath - whether to resolve the paths of files
 * @returns - Array of file paths
 */
function getFilesInDirectory(dirPath, fileExtensions = [], resolvePath = true) {
    let fileNames = fs_1.default.readdirSync(dirPath);
    if (fileExtensions.length) {
        fileNames = fileNames.filter((dirItem) =>
            fileExtensions.includes(node_path_1.default.extname(dirItem)),
        );
    }
    if (resolvePath)
        return fileNames.map((fileName) => node_path_1.default.resolve(dirPath, fileName));
    return fileNames;
}
exports.getFilesInDirectory = getFilesInDirectory;
/**
 * Get list of directories contained in current directory.
 * @param currentPath - current directory
 */
function getDirectories(currentPath) {
    return fs_1.default
        .readdirSync(currentPath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
}
exports.getDirectories = getDirectories;
/**
 * Construct object path compatible with lodash.get/lodash.set from file path.
 * Note: if no root path is provided the file's dirname is taken instead.
 * @param filePath - Path to file.
 * @param root - Path to a parent directory to construct relative path.
 * @return - Object path reflecting file path.
 * @example
 * createObjectPathFromFilePath("/a/b/c/d/e.yml", "/a/b");
 * // "['c']['d']['e']"
 */
function createObjectPathFromFilePath(filePath, root) {
    const dirname = node_path_1.default.dirname(filePath);
    const extension = node_path_1.default.extname(filePath);
    const basename = node_path_1.default.basename(filePath, extension);
    const parentDirs = root
        ? node_path_1.default.relative(root, dirname).split(node_path_1.default.sep)
        : [];
    return [...parentDirs, basename].map((item) => `['${item}']`).join("");
}
exports.createObjectPathFromFilePath = createObjectPathFromFilePath;
async function createDirIfNotExists(directory) {
    try {
        await (0, promises_1.access)(directory);
    } catch (err) {
        await (0, promises_1.mkdir)(directory, { recursive: true });
    }
}
exports.createDirIfNotExists = createDirIfNotExists;
async function cleanDirectory(directory) {
    const files = await (0, promises_1.readdir)(directory, { withFileTypes: true });
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.isDirectory()) {
            // eslint-disable-next-line no-await-in-loop
            await (0, promises_1.rm)(node_path_1.default.join(directory, file.name), {
                recursive: true,
                force: true,
            });
        } else {
            // eslint-disable-next-line no-await-in-loop
            await (0, promises_1.rm)(node_path_1.default.join(directory, file.name));
        }
    }
}
exports.cleanDirectory = cleanDirectory;
