"use strict";
function keypath(path, obj) {
    if (arguments.length == 1) {
        return function (obj) {
            return keypath(path, obj);
        };
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = keypath;
