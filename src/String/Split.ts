/**
 * Split `S` into `D` and returns an Array\<string>.
 * @param {string} S - The string to split.
 * @param {string} D - The divisor to split.
 * @memberof string
 * @example
 * import { String } from 'ts-handy';
 * 
 * type HelloWorld = String.Split<'Hello world!', ' '>; // ['Hello', 'world!']
 */

export type Split<S extends string, D extends string> = string extends S ? string[] : S extends `${infer First}${D}${infer Rest}` ? [First, ...Split<Rest, D>] : [S];