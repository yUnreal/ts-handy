/**
 * Base for Array types
 * @memberof Array
 * @example
 * import { Array } from 'ts-handy';
 * 
 * type ArrayToo<T> = Array.Array<T>;
 * type UnknownArray = Array.Array<unknown>;
 */

export type Array<A = unknown[]> = ReadonlyArray<A>;