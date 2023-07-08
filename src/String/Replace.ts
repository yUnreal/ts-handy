/**
 * Replaces `F` in `S` to `T`.
 * @param {S} S - The string.
 * @param {F} F - Content to replace.
 * @param {T} T - Substitute content.
 * @memberof string
 * @example
 * import { String } from 'ts-handy';
 * 
 * type T1 = String.Replace<'Wello!', 'W', 'H'>; // 'Hello!'
 */

export type Replace<S extends string, F extends string, T extends string> = F extends '' ? S : S extends `${infer V}${F}${infer R}` ? `${V}${T}${R}` : S;