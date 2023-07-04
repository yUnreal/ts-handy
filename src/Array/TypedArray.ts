/**
 * Represents a typed array.
 * @memberof Array
 * @example
 * import { Array } from 'ts-handy';
 * 
 * function isTypedArray(value: unknown): value is Array.TypedArray {
 *  return (...);
 * };
 */

export type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array;