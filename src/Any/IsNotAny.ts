import { IsAny } from './IsAny';

/**
 * Check whether `T` is not any type.
 * @param {T} - The type to check out.
 * @memberof Any
 * @example
 * import { Any } from 'ts-handy';
 * 
 * type T1 = Any.IsNotAny<Readonly<any>>; // true
 * type T2 = Any.IsNotAny<any>; // false
 */

export type IsNotAny<T> = IsAny<T> extends true ? false : true;