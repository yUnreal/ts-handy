/**
 * Check whether `T` is any type.
 * @param {T} T - The type to check out.
 * @memberof Util
 * @example
 * import { Util } from 'ts-handy';
 * 
 * type T1 = Util.IsAny<unknown>; // false
 * type T2 = Util.IsAny<any>; // true
 * type T3 = Util.IsAny<Readonly<any>>; // false
 */

export type IsAny<T> = 0 extends (1 & T) ? true : false