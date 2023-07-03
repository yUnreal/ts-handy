import { Array } from './Array';

/**
 * Reverse an Array
 * @param {T} T - The array
 * @memberof Array
 * @example
 * import { Array } from 'ts-handy';
 * 
 * type HWArray = ['Hello', 'World'];
 * 
 * type Reversed = Array.Reverse<HWArray>; // ['World', 'Hello'];
 */

export type Reverse<T extends Array<unknown>> = T extends [infer First, ...infer Rest] ? [...Reverse<Rest>, First] : T;