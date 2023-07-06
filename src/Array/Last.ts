import { Tail } from './Tail';
import { Array } from './Array';
import { Length } from './Length';

/**
 * Get the last element from `A`.
 * @param {A} A - The Array.
 * @memberof Array
 * @example
 * import { Array } from 'ts-handy';
 * 
 * type T1 = Array.Last<[1, 2, 3]>; // 3
 * type T2 = Array.Last<[]>; // undefined
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Last<A extends Array<any>> = A[Length<Tail<A>>];