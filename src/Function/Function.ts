/**
 * Represents a function type with a return value of type `R` and an array of arguments of type `Args`.
 *
 * @template R - The return type of the function.
 * @template Args - The array type representing the arguments of the function.
 * @memberof Function
 * @example
 * import { Function } from 'ts-handy';
 * 
 * type T1 = Function.Function<boolean, [unknown]>;
 * // (args_0: unknown) => boolean
 */

export type Function<R, Args extends unknown[]> = (...args: Args) => R;