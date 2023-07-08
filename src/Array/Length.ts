import { Array } from './Array';

/**
 * Get the length of `A`.
 * @param {A} A - The Array.
 * @memberof Array
 * @example
 * import { Array } from 'ts-handy';
 * 
 * type T1 = Array.Length<[1, 2, 3]>; // 3
 * type T2 = Array.Length<[...unknown]>; // number
 */

export type Length<A extends Array> = A['length'];