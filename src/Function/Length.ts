/**
 * Get the length of function params.
 * @param {T} T - The function.
 * @memberof Function
 * @example
 * import { Function } from 'ts-handy';
 * 
 * type T1 = Function.Function<boolean, [string, number]>;
 * type T2 = Function.Length<T1>; // 2
 * 
 * type T3 = Function.Length<(arg_0?: unknown)>; // 0 | 1
 * type T4 = Function.Length<(...args: unknown[])>; // number
 */

export type Length<T extends (...args: unknown[]) => unknown> = T extends (...args: infer Args) => unknown ? Args['length'] : never;