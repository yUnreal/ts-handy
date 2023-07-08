/**
 * Check if `A` extends `A1`, if successful returns `A`, otherwise `A1`.
 * @param {A} A - First value.
 * @param {A1} A2 - Second value.
 * @memberof Any
 * @example
 * import { Any } from 'ts-handy';
 * 
 * type Casted = Any.Cast<'Hello', string>; // 'Hello'
 * type NonCasted = Any.Cast<'World', number>; // number
 */

export type Cast<A, A1> = A extends A1 ? A : A1;