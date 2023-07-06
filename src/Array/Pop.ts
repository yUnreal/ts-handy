import { Array } from './Array';

/**
 * Remove the last element from `A`.
 * @param {A} A - The array.
 * @memberof Array
 * @example
 * import { Array } from 'ts-handy';
 * 
 * type T1 = Array.Pop<[3, 2, 1]>; // [3, 2]
 * type T2 = Array.Pop<[]>; // never
 */

export type Pop<A extends Array<unknown>> = A extends [...infer Rest, unknown] ? Rest : never;