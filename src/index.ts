export default function keypath(path: string): (obj: { [name: string]: any }) => any;
export default function keypath(path: string, obj: { [name: string]: any }): any;
export default function keypath(path: string, obj?: { [name: string]: any }): any {
	if (arguments.length == 1) {
		return (obj: { [name: string]: any }): any => keypath(path, obj);
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
