/**
 * Turn keys `K` recursively read-only on `T`.
 * @param {T} T - Value to turn deep readonly.
 * @param {K} K - Keys to turn readonly.
 * @memberof Any
 * @see Readonly
 * @example
 * import { Any } from 'ts-handy';
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
 * const foo: Any.DeepReadonly<Person> = { ..., otherOptions: { deep: { realMoney: 1n } } };
 * 
 * foo.name = 'handy-ts'; // Error
 * foo.otherOptions.deep.realMoney = 2n; // Error
 * 
 * const foobar: Any.DeepReadonly<Person, 'otherOptions'> = { name: 'ts-handy', age: 0, options: { money: 0 }, otherOptions: { ... } };
 * 
 * foobar.options.money = 10; // Ok
 * foobar.otherOptions.deep.realMoney = 10n; // Error
 */

export type DeepReadonly<T, K extends keyof T = keyof T> = Omit<T, K> & {
    readonly [P in K]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};