import { FalsyValues } from './_lib';

/**
 * Represents the logical OR operation between two boolean types.
 *
 * @param L - The left boolean type.
 * @param R - The right boolean type.
 * @memberof Boolean
 * @example
 * import { Boolean } from 'ts-handy';
 * 
 * type T1 = Boolean.Or<1, 0>; // true
 * type T2 = Boolean.Or<false, ''>; // false
 */

export type Or<L, R> = L extends FalsyValues ? R extends FalsyValues ? false : true : true;