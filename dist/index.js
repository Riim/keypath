"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function keypath(path, obj) {
    if (arguments.length == 1) {
        return (obj) => keypath(path, obj);
    }
    if (path == "") {
        return obj;
    }
    let keys = path.split(".");
    let value = obj;
    for (let i = 0, l = keys.length; i < l; i++) {
        value = value[keys[i]];
        if (value == null) {
            break;
        }
    }
    return value;
}
exports.keypath = keypath;
