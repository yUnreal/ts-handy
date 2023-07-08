/**
 * Type that represents an indexable value.
 * @memberof Any
 * @example
 * import { Any } from 'ts-handy';
 * 
 * type AnyObject = { [key: Any.Indexable]: unknown; };
 */

export type Indexable = string | number | symbol;