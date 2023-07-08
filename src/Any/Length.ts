/**
 * Get the length/size from `A`.
 * @param {A} A - Value to get the length.
 * @memberof Any
 * @example
 * import { Any } from 'ts-handy';
 * 
 * type HWArray = ['Hello', 'World'];
 * 
 * type HWLength = Any.Length<HWArray>;
 * 
 * const HWMap: Map<string, string> = new Map<string, string>().set('Hello', 'World');
 * 
 * type HWSize = Any.Length<typeof HWMap>;
 */

export type Length<A> = A extends { length: number; } ? A['length'] : A extends { size: number; } ? A['size'] : undefined;