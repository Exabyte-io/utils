"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUUIDFromNamespace = exports.getUUID = void 0;
const uuid_1 = require("uuid");
function getUUID() {
    return (0, uuid_1.v4)();
}
exports.getUUID = getUUID;
function getUUIDFromNamespace(seed = "", namespace = "00000000-0000-4000-8000-000000000000") {
    return (0, uuid_1.v5)(seed, namespace);
}
exports.getUUIDFromNamespace = getUUIDFromNamespace;
