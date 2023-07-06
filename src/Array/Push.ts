import { Array } from './Array';

/**
 * Push a new item to `A`.
 * @param {A} - The array.
 * @param {I} - The item.
 * @memberof Array
 * @example
 * import { Array } from 'ts-handy';
 * 
 * type T1 = [1, 2]; // [1, 2]
 * type T2 = Array.Push<T1, 3>; // [1, 2, 3]
 */

export type Push<A extends Array<unknown>, I> = [...A, I];