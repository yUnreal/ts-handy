import { Array } from './Array';

/**
 * Concat two arrays.
 * @param {A} A - First array.
 * @param {A1} A1 - Second array.
 * @memberof Array
 * @example
 * import { Array } from 'ts-handy';
 * 
 * type Hello = ['Hello'];
 * type World = ['World!'];
 * 
 * type HelloWorld = Array.Concat<Hello, World>; // ['Hello', 'World!']
 * 
 * type HelloWorldString = Array.Join<HelloWorld, ' '>; // 'Hello world!'
 */

export type Concat<A extends Array<unknown>, A1 extends Array<unknown>> = [...A, ...A1];