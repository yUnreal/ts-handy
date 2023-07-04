/**
 * Equals to [Cast](https://github.com/yUnreal/ts-handy/blob/main/src/Any/Cast.ts), but if fails, returns `Catch`
 * @param {A} A - First value
 * @param {A1} A1 - Second value
 * @param {Catch} Catch - If the test failed
 * @memberof Any
 * @example
 * import { Any } from 'ts-handy';
 * 
 * type Passed = Any.Try<'Hello', string>; // 'Hello';
 * type Failed = Any.Try<'Hello', object>; // never;
 * type FailedM = Any.Try<'Hello', object, 'Failed'>; // 'Failed'
 */

export type Try<A, A1, Catch = never> = A extends A1 ? A1 : Catch;