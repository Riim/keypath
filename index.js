function keypath(path, obj) {
	if (arguments.length == 1) {
		return function(obj) {
			return keypath(path, obj);
		};
	}

	path = path.split('.');

	var value = obj;

	for (var i = 0, l = path.length; i < l; i++) {
		value = value[path[i]];

		if (value == null) {
			break;
		}
	}

	return value;
}

module.exports = keypath;
