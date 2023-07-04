# Utility package for types

## Starting

### Installing

```bash
npm i ts-handy
```

### Example

All types have an example embedded in the `@example` tag, use them.

```ts
// Importing Array & String types
import { Util } from 'ts-handy';

interface Person {
    name: string;
    more: {
        money: number;
    };
}

// Now all keys are read-only
type Readable = Util.DeepReadonly<Person>;

// Now all keys are writable
type Writable = Util.DeepWritable<Readable>;
```

### [Docs](src/docs)

## What's coming

- More types
- More documentation

## Importing

You can import in different ways:

> TIP: Avoid importing all library types by using the wildcard (`*`)

- Raw

```ts
import { Array, String, ... } from 'ts-handy';
```

- Usable

```ts
import th from 'ts-handy';
```

- Never do:

```ts
import * as th from 'ts-handy';
```

### Types

| Any | Array |
|-----|-------|
| String  | Util  |

## Good practices

If you found any type errors, please consider submitting a pull request.

Want to contribute? Submit a pull request.
