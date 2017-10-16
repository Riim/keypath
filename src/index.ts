export function keypath(path: string): (obj: object) => any;
export function keypath(path: string, obj: object): any;
export function keypath(path: string, obj?: object): any {
	if (arguments.length == 1) {
		return (obj: object): any => keypath(path, obj);
	}

	let keys = path.split('.');
	let value = obj as any;

	for (let i = 0, l = keys.length; i < l; i++) {
		value = value[keys[i]];

		if (value == null) {
			break;
		}
	}

	return value;
}
