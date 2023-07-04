/**
 * Represents logical `!` operator.
 * 
 * @param {B} B - The boolean value.
 * @memberof Boolean
 * @example
 * import { Boolean } from 'ts-handy';
 * 
 * type T1 = Boolean.Not<Boolean.False>; // false
 */

export type Not<B extends boolean> = B extends true ? false : true;