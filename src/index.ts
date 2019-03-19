export function keypath<T = any>(
	path: string,
	obj: object
): T | null | undefined;
export function keypath<T = any>(
	path: string
): <U = T>(obj: object) => U | null | undefined;
export function keypath(path: string, obj?: object) {
	if (arguments.length == 1) {
		return (obj: object) => keypath(path, obj);
	}

	if (path == "") {
		return obj;
	}

	let keys = path.split(".");
	let value = obj as any;

	for (let i = 0, l = keys.length; i < l; i++) {
		value = value[keys[i]];

		if (value == null) {
			break;
		}
	}

	return value;
}
