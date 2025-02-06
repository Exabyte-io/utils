/**
 * @summary Identifies language by file extension. Uses 'fortran' by default.
 */
export declare function getProgrammingLanguageFromFileExtension(filename: string, defaultLanguage?: string): string;
/**
 * @summary Formats a given file size.
 * @param size file size.
 * @param decimals number of decimals to round.
 */
export declare function formatFileSize(size: number, decimals?: number): string;
/** Get list of paths for files in a directory and filter by file extensions if provided.
 * @param dirPath - Path to current directory, i.e. $PWD
 * @param fileExtensions - File extensions to filter, e.g. `.yml`
 * @param resolvePath - whether to resolve the paths of files
 * @returns - Array of file paths
 */
export declare function getFilesInDirectory(dirPath: string, fileExtensions?: string[], resolvePath?: boolean): string[];
/**
 * Get list of directories contained in current directory.
 * @param currentPath - current directory
 */
export declare function getDirectories(currentPath: string): string[];
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
export declare function createObjectPathFromFilePath(filePath: string, root: string): string;
export declare function createDirIfNotExists(directory: string): Promise<void>;
export declare function cleanDirectory(directory: string): Promise<void>;
