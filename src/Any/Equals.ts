/**
 * Check whether `T` is equals to `U`
 * @param {T} T - First value
 * @param {U} U - Second value
 * @memberof Any
 * @example
 * import { Any } from 'ts-handy';
 * 
 * type N = Any.Equals<10 | 0, 10>; // false
 * type N2 = Any.Equals<0 | 10, 10 | 0> // true
 * type R = Any.Equals<Readonly<{ _id: string; }>, { _id: string; }>; // false
 */

export type Equals<T, U> = (<G>() => G extends T ? 1 : 2) extends (<G>() => G extends U ? 1 : 2) ? true : false;