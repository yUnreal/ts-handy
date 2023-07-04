/* eslint-disable @typescript-eslint/ban-types */
import { Function } from './Function';

/**
 * Get the return type of `F`.
 * @param {F} F - The function.
 * @memberof Function
 * @example
 * import { Function } from 'ts-handy';
 * 
 * type T1 = Function.Function<boolean, [unknown]>; // (arg_0: unknown) => boolean
 * type T2 = Function.Return<T1>; // boolean
 */

export type Return<F extends Function<unknown, unknown[]>> = F extends Function<infer R, unknown[]> ? R : never;