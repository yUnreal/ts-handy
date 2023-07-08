import { Class } from './Class';

/**
 * Get the arguments from a class.
 * @param {C} C - The class.
 * @memberof Class
 * @example
 * import { Class } from 'ts-handy';
 * 
 * type UserClass = Class.Class<{ _id: string; }, [string]>;
 * 
 * type UserClassArgs = Class.Args<UserClass>; // [string]
 */

export type Args<C> = C extends Class<unknown, infer A> ? A : never;