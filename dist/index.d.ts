export declare function keypath<T = any>(path: string | Array<string>, obj: object): T | null | undefined;
export declare function keypath<T = any>(path: string | Array<string>): <U = T>(obj: object) => U | null | undefined;
