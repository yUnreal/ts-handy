import { IsAny } from './IsAny';

/**
 * Check whether `T` is not any type.
 * @param {T} - The type to check out.
 * @memberof Util
 * @example
 * import { Util } from 'ts-handy';
 * 
 * type T1 = Util.IsNotAny<Readonly<any>>; // true
 * type T2 = Util.IsNotAny<any>; // false
 */

export type IsNotAny<T> = IsAny<T> extends true ? false : true;