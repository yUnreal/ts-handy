import { AbstractConstructor } from './_lib';

/**
 * Represents an abstract class.
 * @param {T} T - Class prototype.
 * @param {Args} Args - Class arguments.
 * @memberof Class
 */

export interface AbstractClass<T, Args extends unknown[] = unknown[]> extends AbstractConstructor<T, Args> {
    prototype: T;
}