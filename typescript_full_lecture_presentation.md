# TypeScript ლექცია #2 – საბაზისო კონსტრუქციები და ტიპები

---

## 📌 ლექციის სტრუქტურა
1. Simple Types
2. Special Types
3. Arrays
4. Tuples
5. Object Types
6. Enums
7. Aliases & Interfaces
8. Operators
9. Conditional Logic
10. Loops
11. DOM Typing (querySelector)
12. DOM Selectors Overview
13. Prompt Input
14. Practice & Group Task
15. React Loop Example

---

## ✅ 1. TS Simple Types
```ts
let name: string = "მარი";
let age: number = 25;
let isActive: boolean = true;
```

---

## ✅ 2. TS Special Types
```ts
let anything: any = "hello";
let unknownValue: unknown = 50;
function log(): void { console.log("Log") }
```

---

## ✅ 3. TS Arrays
```ts
let scores: number[] = [10, 20, 30];
let names: Array<string> = ["ანა", "გიორგი"];
```
- `for`, `for-of`, `forEach`, `map`

---

## ✅ 4. TS Tuples
```ts
let user: [string, number] = ["ლევან", 28];
```
- ფიქსირებული ელემენტების ტიპი და სიგრძე
```ts
type Coordinates = [number, number];
let point: Coordinates = [41.72, 44.78];
```

---

## ✅ 5. TS Object Types
```ts
let person: { name: string; age: number } = {
  name: "ნიკა",
  age: 31
};
```

---

## ✅ 6. TS Enums
```ts
enum Status {
  Active,
  Inactive,
  Pending
}
let userStatus: Status = Status.Active;
```

---

## ✅ 7. TS Aliases & Interfaces
```ts
type User = {
  name: string;
  age: number;
};

interface Product {
  name: string;
  price: number;
  inStock: boolean;
}
```

---

## ✅ 8. TS Operators
- არითმეტიკული: `+`, `-`, `*`, `/`
- ლოგიკური: `&&`, `||`, `!`
- სტრიქონული: `+` ტექსტისთვის
- ტერნარული: `? :`
```ts
let result = age >= 18 ? "დაშვებულია" : "შეზღუდულია";
```

---

## ✅ 9. Conditional Logic
```ts
if (age >= 18) {
  console.log("სრულწლოვანი");
} else {
  console.log("არასრულწლოვანი");
}

switch (status) {
  case "active": console.log("აქტიური"); break;
}
```

---

## ✅ 10. Loops
```ts
for (let i = 0; i < 3; i++) console.log(i);

let items = ["a", "b"];
for (const item of items) console.log(item);

items.map(i => console.log(i));
```

---

## ✅ 11. DOM Typing (querySelector)
```ts
const input = document.querySelector("#email") as HTMLInputElement;
input.value = "hello";

const btn = document.querySelector("button");
btn?.addEventListener("click", () => console.log("clicked"));
```
- `as HTMLInputElement` – ტიპის ზუსტი განსაზღვრა
- გამოიყენე `?.` ან `if (...)` Null-ის თავიდან ასაცილებლად

---

## ✅ 12. DOM Selectors Overview

### 📌 querySelector / querySelectorAll ტიპები
- აბრუნებს `Element | null` ან `NodeList`

```ts
const div = document.querySelector(".container") as HTMLDivElement;
const allItems = document.querySelectorAll(".item");
```

### 📌 HTMLElement ტიპები:
| Selector       | Type                    |
|----------------|-------------------------|
| `<input>`      | `HTMLInputElement`      |
| `<form>`       | `HTMLFormElement`       |
| `<button>`     | `HTMLButtonElement`     |
| `<select>`     | `HTMLSelectElement`     |
| `<textarea>`   | `HTMLTextAreaElement`   |

### ✅ მაგალითი
```ts
const checkbox = document.querySelector("#agree") as HTMLInputElement;

if (checkbox?.checked) {
  console.log("დადასტურდა");
}
```

---

## ✅ 13. Prompt Input

### 📌 მონაცემის მიღება `prompt()` ფუნქციით
```ts
const input: string | null = prompt("შეიყვანეთ ასაკი:");

if (input !== null) {
  const age: number = Number(input); // ან parseInt(input)
  if (!isNaN(age)) {
    console.log("თქვენი ასაკია:", age);
  } else {
    console.log("გთხოვთ შეიყვანოთ ვალიდური რიცხვი");
  }
}
```

### 🧠 prompt() ტიპურად:
| ქმედება                    | ტიპი              |
|----------------------------|-------------------|
| `prompt()`                 | `string \| null`  |
| `parseInt(value)`         | `number`          |
| `Number(value)`           | `number`          |

- შეამოწმე null (`if (value !== null)`)
- გამოიყენე `Number()` ან `parseInt()` რიცხვად გადასაყვანად
- გადაამოწმე `isNaN()` რომ გამორიცხო შეცდომა
```ts
const rawAge = prompt("შეიყვანეთ თქვენი ასაკი:");

if (rawAge !== null) {
  const age: number = parseInt(rawAge);
  if (!isNaN(age)) {
    console.log("თქვენი ასაკია:", age);
  } else {
    console.log("გთხოვთ შეიყვანოთ რიცხვი.");
  }
}
```
- `prompt()` აბრუნებს `string | null`
- გამოიყენეთ `parseInt()` ან `Number()` ტიპის გარდასაქმნელად
- აკონტროლეთ `NaN` შეცდომის თავიდან ასაცილებლად
- აბრუნებს `string | null`
- გამოიყენეთ `if (value)` შემოწმება

---

## ✅ 14. Practice – User Array
```ts
type User = {
  name: string;
  age: number;
};

let users: User[] = [
  { name: "მარი", age: 22 },
  { name: "დავით", age: 28 }
];

users.map(user => console.log(`${user.name} არის ${user.age} წლის`));
```

---

## ✅ 15. React Loop Example

### 📌 როგორ დავალუპოთ მასივი React-ში:
```tsx
type Product = {
  name: string;
  price: number;
};

const products: Product[] = [
  { name: "ვაშლი", price: 2 },
  { name: "მანდარინი", price: 3 }
];

export default function ProductList() {
  return (
    <div>
      {products.map((p, index) => (
        <div key={index}>
          {p.name} - {p.price} ₾
        </div>
      ))}
    </div>
  );
}
```
- `map()` პირდაპირ გამოიყენება JSX-ში
- საჭიროაა `key` თითო ელემენტზე

---

## 👥 ჯგუფური დავალება
1. შექმენით `Product` ტიპი
2. დაამატეთ პროდუქტების მასივი
3. დაბეჭდეთ `map()` ან `forEach()` გამოყენებით

---

## 🏠 საშინაო დავალება
```ts
type Task = {
  title: string;
  completed: boolean;
};

const tasks: Task[] = [
  { title: "ლექციის მომზადება", completed: true },
  { title: "საშინაო დავალება", completed: false }
];

const done = tasks.filter(t => t.completed);
```

---

## ❓ კითხვები და პასუხები

