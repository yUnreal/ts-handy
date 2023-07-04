/**
 * Create or describe a `class`
 * @param {T} T - Class prototype
 * @param {Arguments} Arguments - Class arguments
 * @memberof Class
 * @example
 * import { Class } from 'ts-handy';
 * 
 * declare const Person: Class<{ name: string; }, [string]>;
 * 
 * const newPerson = new Person('Bob');
 */

export type Class<T, Arguments extends unknown[] = unknown[]> = {
    prototype: T;
    new(...args: Arguments): T;
}