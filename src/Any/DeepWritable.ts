/**
 * Turn the keys `K` deep writable on `T`.
 * @param {unknown} T - Value to turn deep writable.
 * @param {K} K - Keys to turn writable.
 * @memberof Any
 * @see Writable
 * @example
 * import { Any } from 'ts-handy';
 * 
 * interface Person {
 *   readonly name: string;
 *   readonly age: number;
 *   readonly options: {
 *      readonly money: number;
 *   };
 * }
 * 
 * const bar: Person = { name: 'ts-handy', age: 0, options: { money: 0 } };
 * 
 * bar.options.money = 1; // Error
 * 
 * const foo: Any.DeepWritable<Person, 'name' | 'options'> = { name: 'ts-handy', age: 0, options: { money: 0 } };
 * 
 * foo.age = 3; // Error
 * foo.options.money = 1; // Ok
 * foo.options.name = 'handy-ts'; // Ok
 * 
 * const foobar: Any.DeepWritable<Person> = { name: 'ts-handy', ... }; // Turn writable all keys
 */

export type DeepWritable<T, K extends keyof T = keyof T> = Omit<T, K> & { -readonly [P in K]: T[P] extends object ? DeepWritable<T[P]> : T[P]; };