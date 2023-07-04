import { FalsyValues } from './_lib';

/**
 * Represents the logical AND operator between two boolean types.
 * 
 * @param {L} L - The left boolean type.
 * @param {R} R - The right boolean type.
 * @memberof Boolean
 * @example
 * import { Boolean } from 'ts-handy';
 * 
 * type T1 = Boolean.And<true, ''>; // false
 * type T2 = Boolean.And<1, -1>; // true
 */

export type And<L, R> = L extends FalsyValues ? false : R extends FalsyValues ? false : true;