Absolutely! Let's now explain everything clearly in **English**, and especially focus on:

* What it means to add a custom method or property to built-in types (like `String`)
* Where and how to write the **global type declaration**
* A full working example

---

## 🧠 What is happening with `.trim()`?

`.trim()` is a **method** that belongs to the built-in `String.prototype`. Every string in JavaScript (and TypeScript) inherits this method.

Example:

```ts
const name = "   Amiran   ";
console.log(name.trim()); // "Amiran"
```

This works because the JavaScript engine knows that strings have a method called `trim()`.

---

## 🛠️ Can we make our own `.something()`?

Yes, we can!
You can **extend built-in types** like `String`, `Array`, or `Number` by adding **custom methods or properties**.

Let’s say you want to use:

```ts
"Hello World".toSnakeCase(); // → "hello_world"
```

By default, JavaScript and TypeScript don’t know what `toSnakeCase()` means — **but you can teach them**.

---

## ✅ Step-by-step: Add a custom string method

### 1. Create a file like `string.extensions.ts` or any module file.

### 2. Add the following code:

```ts
export {}; // Makes the file a module (so `declare global` works)

declare global {
  interface String {
    toSnakeCase(): string;
  }
}

String.prototype.toSnakeCase = function (): string {
  return this.trim().toLowerCase().replace(/\s+/g, "_");
};
```

Now, you can use it like this:

```ts
const title = "  Hello World Example  ";
console.log(title.toSnakeCase()); // "hello_world_example"
```

---

## 🧩 Where to put `declare global`

This part:

```ts
declare global {
  interface String {
    toSnakeCase(): string;
  }
}
```

Must be inside a **TypeScript module**.
That means:

* The file must **import or export something** (even `export {};` is enough)
* Otherwise, TypeScript will not allow `declare global`

📁 **Recommended:** Put it in a dedicated file, like:

```
src/extensions/string.extensions.ts
```

or just

```
src/global-augmentations.ts
```

And make sure it runs **once** when your app starts. You can import it in `main.ts` or `index.ts`:

```ts
import "./extensions/string.extensions";
```

---

## ⚠️ Should you do this?

This is called **prototype augmentation** or **monkey patching**.

✅ Good for:

* Utility enhancements
* Lab/demo/educational projects
* Controlled environments

⚠️ Be careful in production:

* Might conflict with future language features or other libraries
* Not recommended unless you **fully control the environment**

---

## 🔥 Bonus: Custom Property Instead of Method

If you want to access it like a property (e.g. `.snakeCase`), you can use a getter:

```ts
declare global {
  interface String {
    readonly snakeCase: string;
  }
}

Object.defineProperty(String.prototype, "snakeCase", {
  get() {
    return (this as string).trim().toLowerCase().replace(/\s+/g, "_");
  }
});
```

Now you can use:

```ts
console.log("  Hello World  ".snakeCase); // "hello_world"
```

---




### Using custom prototype extensions in **Next 13/14 App Router** (the `/app` directory)

Below is a clean, idiomatic way to add global String helpers (or any prototype tweaks) in an App-Router project.

---

## 1.  Put the augmentation code outside `/app`

```
src/
 ├─ lib/
 │   └─ string.extensions.ts      ← prototype + `declare global`
 └─ app/
     ├─ layout.tsx                ← root layout (runs once on every route)
     └─ page.tsx                  ← example page
```

**`src/lib/string.extensions.ts`**

```ts
export {};                         // marks the file as a module

declare global {
  interface String {
    toSnakeCase(): string;
  }
}

String.prototype.toSnakeCase = function (): string {
  return this.trim().toLowerCase().replace(/\s+/g, "_");
};
```

---

## 2.  Import the file exactly once — in `app/layout.tsx`

```tsx
// src/app/layout.tsx
import "@/lib/string.extensions";   // ← executes before any component code

import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

Why the **root layout**?

* It is the first piece of React/JS that runs for every route, both server- and client-side.
* Once this module executes, `String.prototype` is patched; every component, loader or util that comes later can call `.toSnakeCase()` with full TypeScript support.

---

## 3.  Use it anywhere

```tsx
// src/app/page.tsx
export default function HomePage() {
  return <p>{"Hello Next World".toSnakeCase()}</p>; // → “hello_next_world”
}
```

The compiler auto-completes `.toSnakeCase()` because `declare global …` augmented `interface String` at build time.

---

