/**
 * Conditional type that checks the type `C` and returns the type `Then` if `C` is true, otherwise returns the type `Else`.
 *
 * @param C - Type of the condition.
 * @param Then - Type to be returned if `C` is true.
 * @param Else - Type to be returned if `C` is false (default: `never`).
 * @memberof Any
 */

export type If<C, Then, Else = never> = C extends 1 ? Then : Else;