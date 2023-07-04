import { AbstractConstructor } from './_lib';

export interface AbstractClass<T, Args extends unknown[] = unknown[]> extends AbstractConstructor<T, Args> {
    prototype: T;
}