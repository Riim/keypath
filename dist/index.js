"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function keypath(path, obj) {
    if (arguments.length == 1) {
        return function (obj) { return keypath(path, obj); };
    }
    if (path == '') {
        return obj;
    }
    var keys = path.split('.');
    var value = obj;
    for (var i = 0, l = keys.length; i < l; i++) {
        value = value[keys[i]];
        if (value == null) {
            break;
        }
    }
    return value;
}
exports.keypath = keypath;
