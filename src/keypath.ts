export default function keypath(path: string): (obj: Object) => any;
export default function keypath(path: string, obj: Object): any;
export default function keypath(path: string, obj?: Object): any {
	if (arguments.length == 1) {
		return function(obj: Object): any {
			return keypath(path, obj);
		};
	}

	let keys = path.split('.');
	let value = obj as Object;

	for (let i = 0, l = keys.length; i < l; i++) {
		value = value[keys[i]];

		if (value == null) {
			break;
		}
	}

	return value;
}
