export declare function keypath<T = any>(path: string, obj: object): T | null | undefined;
export declare function keypath<T = any>(path: string): <U = T>(obj: object) => U | null | undefined;
