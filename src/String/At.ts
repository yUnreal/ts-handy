import { Split } from './Split';

/**
 * Get the character from index `I`
 * @param {string} S - The target string
 * @param {number} I - The index to get the character
 * @memberof string
 * @example
 * import { String } from 'ts-toolset';
 * 
 * type H = At<'Hello, world!', 0>; // 'h'
 */

export type At<S extends string, I extends number> = Split<S, ''>[I];