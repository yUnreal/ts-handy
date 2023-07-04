import { Class } from './Class';

/**
 * Get the prototype of a class
 * @param {C} C - The class
 * @memberof Class
 */

export type Prototype<C> = C extends Class<infer P, unknown[]> ? P : never;