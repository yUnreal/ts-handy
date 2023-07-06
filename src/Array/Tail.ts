import { Array } from './Array';

/**
 * Remove the first item from `A`.
 * @param {A} A - The Array.
 * @memberof Array
 * @example
 * import { Array } from 'ts-handy';
 * 
 * type T1 = Array.Tail<[1, 1, 2, 3]>; // [1, 2, 3]
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Tail<A extends Array<unknown>> = ((...args: A) => void) extends ((arg: any, ...rest: infer Rest) => void) ? Rest : [];