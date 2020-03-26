export function keypath<T = any>(path: string | Array<string>, obj: object): T | null | undefined;
export function keypath<T = any>(
	path: string | Array<string>
): <U = T>(obj: object) => U | null | undefined;
export function keypath(path: string | Array<string>, obj?: object) {
	if (arguments.length == 1) {
		return (obj: object) => keypath(path, obj);
	}

	if (typeof path == 'string' ? path == '' : !path.length) {
		return obj;
	}

	let keys = typeof path == 'string' ? path.split('.') : path;
	let value = obj;

	for (let key of keys) {
		value = value![key];

		if (value == null) {
			break;
		}
	}

	return value;
}
