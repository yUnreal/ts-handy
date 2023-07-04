/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Function } from './Function';

/**
 * Extract the parameters of `F`.
 * @param {F} F - The function.
 * @memberof Function
 * @example
 * import { Function } from 'ts-handy';
 * 
 * type T1 = Function.Function<boolean, [string]>; // (args_0: string) => boolean
 * type T1Params = Function.Params<T1>; // [string]
 */

export type Params<F extends Function<unknown, any[]>> = F extends Function<unknown, infer P> ? P : never;