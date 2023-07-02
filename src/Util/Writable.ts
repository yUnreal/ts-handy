/**
 * Turn the keys `K` writable on `T`
 * @param {unknown} T - The value
 * @param {K} K - Keys to turn writable
 * @memberof Util
 * @example
 * import { Util } from 'ts-toolset';
 * 
 * interface Person {
 *  readonly name: string;
 *  readonly age: number;
 * }
 * 
 * const readonlyBar: Person = { name: 'ts-toolset', age: 0 };
 * 
 * readonlyBar.age = 1; // Error
 * 
 * const writableBar: Writable<Person, 'age'> = { name: 'ts-toolset', age: 0 };
 * 
 * writableBar.age = 1; // Ok
 * writableBar.name = 'toolset-ts'; // Error
 */

export type Writable<T, K extends keyof T> = Omit<T, K> & {
    -readonly [P in K]: T[P];
};