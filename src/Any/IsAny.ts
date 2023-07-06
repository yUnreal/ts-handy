/**
 * Check whether `T` is any type.
 * @param {T} T - The type to check out.
 * @memberof Any
 * @example
 * import { Any } from 'ts-handy';
 * 
 * type T1 = Any.IsAny<unknown>; // false
 * type T2 = Any.IsAny<any>; // true
 * type T3 = Any.IsAny<Readonly<any>>; // false
 */

export type IsAny<T> = 0 extends (1 & T) ? true : false