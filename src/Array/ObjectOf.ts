import { Array } from './Array';
import { Indexable } from '../Any/Indexable';

/**
 * Creates an object from `A`.
 * @param {A} A - The array to transform.
 * @memberof Array
 * @example
 * import { Array } from 'ts-handy';
 * 
 * type T1 = Array.ObjectOf<[1, 2, 3]>; // { 1: 1; 2: 2; 3: 3; };
 */

export type ObjectOf<A extends Array<Indexable>> = { [K in A[number]]: K; };