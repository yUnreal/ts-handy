/**
 * Get the length or size from a value
 * @param {A} A - The value
 * @memberof Util
 * @example
 * import { Util } from 'ts-handy';
 * 
 * type HWArray = ['Hello', 'World'];
 * 
 * type HWLength = Util.Length<HWArray>;
 * 
 * const HWMap: Map<string, string> = new Map<string, string>().set('Hello', 'World');
 * 
 * type HWSize = Util.Length<typeof HWMap>;
 */

export type Length<A> = A extends { length: number; } ? A['length'] : A extends { size: number; } ? A['size'] : undefined;