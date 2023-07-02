/**
 * Turn the keys `K` deep writable on `T`
 * @param {unknown} T - The value
 * @param {K} K - Keys to turn writable
 * @memberof Util
 * @see Writable
 * @example
 * import { Util } from 'ts-toolset';
 * 
 * interface Person {
 *   readonly name: string;
 *   readonly age: number;
 *   readonly options: {
 *      readonly money: number;
 *   };
 * }
 * 
 * const bar: Person = { name: 'ts-toolset', age: 0, options: { money: 0 } };
 * 
 * bar.options.money = 1; // Error
 * 
 * const foo: Util.DeepWritable<Person, 'name' | 'options'> = { name: 'ts-toolset', age: 0, options: { money: 0 } };
 * 
 * foo.options.money = 1; // Ok
 * foo.options.name = 'toolset-ts'; // Ok
 * foo.options.age = 3; // Error
 * 
 * const foobar: Util.DeepWritable<Person> = { name: 'ts-toolset', ... }; // Turn writable all keys
 */

export type DeepWritable<T, K extends keyof T = keyof T> = Omit<T, K> & { -readonly [P in K]: T[P] extends object ? DeepWritable<T[P]> : T[P]; };