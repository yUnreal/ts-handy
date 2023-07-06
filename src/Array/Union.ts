import { Array } from './Array';

/**
 * Get the union type from `A`.
 * @param {A} A - The array.
 * @memberof Array
 * @example
 * import { Array } from 'ts-handy';
 * 
 * type T1 = Array.Union<[1, 2, 3]>; // 3 | 2 | 1
 * type T2 = Array.Union<[unknown, any, 3]>; // any
 * type T2 = Array.Union<[unknown, 0]>; // unknown
 */

export type Union<A extends Array<unknown>> = A[number];