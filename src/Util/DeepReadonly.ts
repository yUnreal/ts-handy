/**
 * Turn keys `K` recursively read-only on `T`
 * @param {T} T - The value
 * @param {K} K - Keys to turn readonly
 * @memberof Util
 * @see Readonly
 * @example
 * import { Util } from 'ts-handy';
 * 
 * interface Person {
 *  name: string;
 *   age: number;
 *   options: {
 *       money: number;
 *   };
 *   otherOptions: {
 *       deep: {
 *           realMoney: bigint;
 *       };
 *   };
 *}
 * 
 * const bar: Person = { name: 'ts-handy', age: 0, options: { money: 0 }, ... };
 * 
 * bar.options.money = 10; // Ok
 * 
 * const foo: Util.DeepReadonly<Person> = { ..., otherOptions: { deep: { realMoney: 1n } } };
 * 
 * foo.name = 'toolset-ts'; // Error
 * foo.otherOptions.deep.realMoney = 2n; // Error
 * 
 * const foobar: Util.DeepReadonly<Person, 'options'> = { name: 'ts-handy', age: 0, options: { money: 0 }, otherOptions: { ... } };
 * 
 * foobar.options.money = 10; // Ok
 * foobar.otherOptions.deep.realMoney = 10n; // Error
 */

export type DeepReadonly<T, K extends keyof T = keyof T> = Omit<T, K> & {
    readonly [P in K]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};