import * as fs from "fs";

export function createDirIfNotExistsSync(directoryPath: string) {
    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
    }
}
