## ✅ Rest Parameters

Rest parameters allow you to pass an arbitrary number of arguments to a function as an array.

```ts
function logMessages(...messages: string[]) {
  messages.forEach(msg => console.log(msg));
}

logMessages("Hello", "Welcome", "to TypeScript");
```

Useful when you don’t know how many arguments will be passed.

---

## ✅ Function Overloading

Function overloading in TypeScript lets you define **multiple function signatures** for the same function name. This is useful when a function can handle **different types of inputs**.

### 🔹 How it works:
- You define **multiple declarations** (signatures) of a function.
- Then, you provide **one implementation** that handles all cases using union types or type guards.

### 🧪 Example:
```ts
function contact(email: string): string;
function contact(phone: number): string;
function contact(value: string | number): string {
  if (typeof value === "string") {
    return `Sending email to ${value}`;
  } else {
    return `Dialing phone number ${value}`;
  }
}

console.log(contact("user@example.com")); // Sending email to user@example.com
console.log(contact(5551234));             // Dialing phone number 5551234
```

> Note: Only the implementation contains logic. The overloads are for type-checking.

### 🧠 Why use overloading?
- It makes your code more readable and type-safe.
- Helps you define API methods that accept multiple formats.

---

### 🧩 Exercise: Implement a Logger

Write an overloaded function `logMessage` that:
- Accepts a single `string` → logs "Message: ..."
- Accepts a `number` → logs "Code: ..."

```ts
function logMessage(msg: string): void;
function logMessage(code: number): void;
function logMessage(value: string | number): void {
  if (typeof value === "string") {
    console.log(`Message: ${value}`);
  } else {
    console.log(`Code: ${value}`);
  }
}

logMessage("System is running");
logMessage(200);
```

Try adding more overloads to handle arrays of messages!

---

## ✅ Classes

A class is a blueprint for creating objects.

```ts
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const user = new User("Alice");
user.greet();
```

---

## ✅ Access Modifiers

Used to control access to class members.

```ts
class BankAccount {
  public owner: string;
  private balance: number;
  protected bankCode: string = "XYZ123";

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  public getBalance() {
    return this.balance;
  }
}

const acc = new BankAccount("Bob", 1000);
console.log(acc.owner);        // ✅ Public
console.log(acc.getBalance()); // ✅ Access through method
// console.log(acc.balance);   // ❌ Error: private
```

---

## ✅ Readonly Modifier

`readonly` properties can only be assigned once.

```ts
class Vehicle {
  readonly wheels: number = 4;

  constructor(readonly brand: string) {}
}

const car = new Vehicle("Toyota");
console.log(car.wheels);  // 4
// car.wheels = 6;         // ❌ Error: Cannot assign to 'wheels'
```

---

## ✅ Getters & Setters

Getters and setters control access to private fields.

```ts
class Product {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length > 0) {
      this._name = value;
    }
  }
}

const item = new Product("Pen");
item.name = "Notebook";
console.log(item.name); // Notebook
```

---

## ✅ Inheritance

Inheritance allows one class to use the features of another.

### 🔍 What is `super()`?

When a class extends another class, you **must call `super()` inside the constructor** to access and run the base class constructor.

```ts
class User {
  constructor(public username: string) {
    console.log(`User ${username} created`);
  }
}

class Admin extends User {
  constructor(username: string, public role: string) {
    super(username); // Call the parent constructor
    console.log(`Role: ${role}`);
  }
}

const admin = new Admin("admin123", "superadmin");
// Output:
// User admin123 created
// Role: superadmin
```

> Think of `super()` like calling your parent's constructor — without it, your subclass doesn't know how to properly build itself based on the parent class.

---

## ✅ Static Methods & Properties

Static members belong to the class, not an instance.

```ts
class Helper {
  static version = "1.0.0";

  static log(msg: string) {
    console.log(`[LOG] ${msg}`);
  }
}

Helper.log("Application started");
console.log(Helper.version);
```

---

## ✅ Abstract Classes

Abstract classes define methods/properties that must be implemented in child classes.

```ts
abstract class Device {
  constructor(public label: string) {}

  abstract powerOn(): void;

  describe() {
    console.log(`Device: ${this.label}`);
  }
}

class Laptop extends Device {
  powerOn(): void {
    console.log(`${this.label} is now ON.`);
  }
}

const laptop = new Laptop("Lenovo");
laptop.describe();
laptop.powerOn();
```

> Abstract classes cannot be directly instantiated. They enforce structure and shared behavior.

---

## ✅ Summary

| Topic                  | Description                                          |
|------------------------|------------------------------------------------------|
| Rest Parameters        | Accept unlimited arguments as an array              |
| Function Overloading   | One function handles multiple argument types        |
| Classes                | Blueprint for objects                               |
| Access Modifiers       | Control visibility (public, private, protected)     |
| readonly Modifier      | One-time assignable properties                      |
| Getters & Setters      | Controlled access to private fields                 |
| Inheritance            | Reuse logic from other classes                      |
| Static Methods/Props   | Belong to the class, not object instances           |
| Abstract Classes       | Define methods to be implemented by subclasses      |
