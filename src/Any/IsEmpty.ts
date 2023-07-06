import { EmptyObject } from './EmptyObject';

/**
 * Returns a `boolean` whetever the `T` is strictly empty object `{}`
 * @param {unknown} T - The value
 * @memberof Any
 * @example
 * import { Any } from 'ts-handy';
 * 
 * type NonEmptyObject = 0;
 * 
 * type empty = Any.isEmpty<Any.EmptyObject>; // true
 * type nonEmpty = Any.isEmpty<NonEmptyObject>; // false
 */

export type IsEmpty<T> = T extends EmptyObject ? true : false;