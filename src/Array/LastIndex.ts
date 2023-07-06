import { Tail } from './Tail';
import { Array } from './Array';
import { Length } from './Length';

/**
 * Get the last index from `A`.
 * @param {A} A - The Array.
 * @memberof Array
 * @example
 * import { Array } from 'ts-handy';
 * 
 * type T1 = Array.LastIndex<[1, 2, 3]>; // 2
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LastIndex<A extends Array<any>> = Length<Tail<A>>;