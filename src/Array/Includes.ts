import { Array } from './Array';
import { Equals } from '../Any/Equals';

/**
 * Check whether `U` includes `U`.
 * @param {A} A - The array to check.
 * @param {E} E - The element to check.
 * @memberof Array
 * @example
 * import { Array } from 'ts-handy';
 * 
 * type T1 = Array.Includes<[0], 0>; // true
 * type T2 = Includes<[{ _key: string; }], { _key: number; }>; // false
 */

export type Includes<A extends Array<unknown>, E> = A extends [infer F, ...infer Rest] ? Equals<F, E> extends true ? true : Includes<Rest, E> : false;