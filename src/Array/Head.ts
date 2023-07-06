import { Array } from './Array';
import { Length } from './Length';

/**
 * Get the first element of `A`.
 * @param {A} A - The Array.
 * @memberof Array
 * @example
 * import { Array } from 'ts-handy';
 * 
 * type T1 = Array.Head<[3, 2, 1]>; // 3
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Head<A extends Array<any>> = Length<A> extends 0 ? never : A[0];