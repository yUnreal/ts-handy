import { Array } from './Array';

/**
 * Get the element from index `I`
 * @param {A} A - The array
 * @param {I} I - The index to get the element
 * @memberof Array
 * @example
 * import { Array } from 'ts-handy';
 * 
 * type World = Array.At<['Hello', ' ', 'world!'], 2>; // 'world!'
 */

export type At<A extends Array, I extends number> = A[I];