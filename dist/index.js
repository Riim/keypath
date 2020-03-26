"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function keypath(path, obj) {
    if (arguments.length == 1) {
        return (obj) => keypath(path, obj);
    }
    if (typeof path == 'string' ? path == '' : !path.length) {
        return obj;
    }
    let keys = typeof path == 'string' ? path.split('.') : path;
    let value = obj;
    for (let key of keys) {
        value = value[key];
        if (value == null) {
            break;
        }
    }
    return value;
}
exports.keypath = keypath;
