/**
 * Represents a primitive value in JavaScript.
 * @memberof Any
 * @example
 * import { Any } from 'ts-handy';
 * 
 * function isPrimitive(value: unknown): value is Any.Primitive {
 *  return (...);
 * };
 */

export type Primitive = null | undefined | number | string | boolean | symbol | bigint;