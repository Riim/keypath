export default function keypath(path: string): (obj: {
    [name: string]: any;
}) => any;
export default function keypath(path: string, obj: {
    [name: string]: any;
}): any;
