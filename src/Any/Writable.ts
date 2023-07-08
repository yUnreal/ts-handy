/**
 * Turn the keys `K` writable on `T`.
 * @param {T} T - Value to turn writable.
 * @param {K} K - Keys to turn writable.
 * @memberof Any
 * @example
 * import { Any } from 'ts-handy';
 * 
 * interface Person {
 *  readonly name: string;
 *  readonly age: number;
 * }
 * 
 * const readonlyBar: Person = { name: 'ts-handy', age: 0 };
 * 
 * readonlyBar.age = 1; // Error
 * 
 * const writableBar: Writable<Person, 'age'> = { name: 'ts-handy', age: 0 };
 * 
 * writableBar.age = 1; // Ok
 * writableBar.name = 'handy-ts'; // Error
 */

export type Writable<T, K extends keyof T> = Omit<T, K> & {
    -readonly [P in K]: T[P];
};