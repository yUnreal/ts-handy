/**
 * Represents a strictly empty object `{}`
 * @memberof Util
 * @example
 * import { Util } from 'ts-handy';
 * 
 * const Bar: {} = 0; // Ok
 * const Foo: {} = { a: 1 }; // Ok
 * const BarFoo: {} = []; // Ok
 * 
 * const Foo: Util.EmptyObject = {}; // Ok
 * const Bar: Util.EmptyObject = 0; // Error
 * const FooBar: Util.EmptyObject = []; // Error
 */

export type EmptyObject = { [x: string]: never; };