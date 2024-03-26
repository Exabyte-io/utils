"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTimestampableKeysFromConfig = void 0;
function removeTimestampableKeysFromConfig(config) {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { createdAt, updatedAt, removedAt, ...restConfig } = config;
    return restConfig;
}
exports.removeTimestampableKeysFromConfig = removeTimestampableKeysFromConfig;
