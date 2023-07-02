/**
 * An value that can be awaitable or not
 * @param {unknown} P - The value
 * @memberof Any
 * @example
 * import { Any } from 'ts-toolset';
 * 
 * async function bar(foo: Awaitable<string>): Promise<void> {
 *   const result: Any.Await<typeof foo> = await foo;
 * 
 *   console.log(result); // string
 * }
 * 
 * bar('foo');
 * bar(new Promise<string>((res): void => res('foo')));
 */

export type Awaitable<P> = PromiseLike<P> | P;