import { Array } from './Array';

export type Reverse<T extends Array<unknown>> = T extends [infer First, ...infer Rest] ? [...Reverse<Rest>, First] : T;