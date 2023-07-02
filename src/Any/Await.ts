/**
 * Await for a Promise
 * @param {unknown} P - Some promise
 * @memberof Any
 * @example
 * import { Any } from 'ts-toolset';
 * 
 * const promise: Promise<number> = new Promise<number>((res) => res(0));
 * 
 * const result: Await<typeof promise> = await promise; // number
 * 
 * type Awaited = Await<Promise<number>>; // number
 */

export type Await<P> = P extends Promise<infer R> ? R : P;