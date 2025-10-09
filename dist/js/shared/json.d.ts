type Replacer = Parameters<typeof JSON.stringify>[1];
type Space = Parameters<typeof JSON.stringify>[2];
type WriteJSONOptions = {
    replacer?: Replacer;
    spaces?: Space;
    addNewLine?: boolean;
};
export declare function readJSONFileSync(filePath: string): object;
export declare function writeJSONFileSync(filePath: string, data: unknown, { replacer, spaces, addNewLine }?: WriteJSONOptions): void;
export {};
