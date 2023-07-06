import { Equals } from './Equals';

/**
 * Check whether `T` is not equals to `U`.
 * @param {T} T - First value.
 * @param {U} U - Second value.
 * @memberof Any
 * @example
 * import { Any } from 'ts-handy';
 * 
 * type T1 = Any.NotEquals<Any.Equals<true, true>, true>; // false
 * type T1 = Any.NotEquals<any, unknown>; // true
 */

export type NotEquals<T, U> = Equals<T, U> extends true ? false : true;