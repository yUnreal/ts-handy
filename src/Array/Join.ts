import { Array } from './Array';
import { Literal } from './_lib';

/**
 * Join an Array into a string.
 * @param {Array<unknown>} S - The array to join.
 * @param {string} S - The separator.
 * @memberof Array
 * @example
 * import { Array } from 'ts-handy';
 * 
 * type HW = ['Hello', 'world!'];
 * type HelloWorld = Array.Join<HW, ' '>; // 'Hello world!'
 */

export type Join<A extends Array<unknown>, S extends string> = A extends [] ? '' : A extends [Literal] ? `${A[0]}` : A extends [Literal, ...infer Rest] ? `${A[0]}${S}${Join<Rest, S>}` : string;