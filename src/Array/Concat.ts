import { Array } from './Array';

export type Concat<A extends Array, A1 extends Array> = [...A, ...A1];