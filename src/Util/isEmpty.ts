import { EmptyObject } from './EmptyObject';

/**
 * Returns a `boolean` whetever the `T` is strictly empty object `{}`
 * @param {unknown} T - The value
 * @memberof Util
 * @example
 * import { Util } from 'ts-toolset';
 * 
 * type NonEmptyObject = 0;
 * 
 * type empty = Util.isEmpty<Util.EmptyObject>; // true
 * type nonEmpty = Util.isEmpty<NonEmptyObject>; // false
 */

export type IsEmpty<T> = T extends EmptyObject ? true : false;