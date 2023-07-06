/**
 * Represents a strictly empty object `{}`
 * @memberof Any
 * @example
 * import { Any } from 'ts-handy';
 * 
 * const Bar: {} = 0; // Ok
 * const Foo: {} = { a: 1 }; // Ok
 * const BarFoo: {} = []; // Ok
 * 
 * const Foo: Any.EmptyObject = {}; // Ok
 * const Bar: Any.EmptyObject = 0; // Error
 * const FooBar: Any.EmptyObject = []; // Error
 */

export type EmptyObject = { [x: string]: never; };