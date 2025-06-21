# Full Lecture: OOP in TypeScript

## Slide 1: What is OOP?

* Object-Oriented Programming (OOP) is a way to structure code using objects
* It models real-world entities: Users, Orders, Products, etc.
* OOP is based on four main principles:

  1. Encapsulation
  2. Inheritance
  3. Polymorphism
  4. Abstraction

---

## Slide 2: Classes and Objects

```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
const p = new Person("Gio");
p.greet();
```

* `class`: blueprint
* `object`: created with `new`
* `this`: refers to the current instance

---

## Slide 3: Constructor Explained

* Constructor runs automatically on object creation
* Used to initialize fields

```ts
class User {
  constructor(public name: string) {
    console.log(`User ${name} created`);
  }
}
```

### Real Usage:

```ts
const user1 = new User("Nino");
```

---

## Slide 4: Destructor (Simulated)

* TypeScript has no native destructors
* Use custom `cleanup()` or `dispose()` methods

```ts
class FileHandler {
  constructor(private filename: string) {
    console.log(`Opened ${filename}`);
  }
  cleanup() {
    console.log(`Closed ${this.filename}`);
  }
}
```

### Real Usage:

```ts
const file = new FileHandler("log.txt");
file.cleanup();
```

---

## Slide 5: Encapsulation (Private, Public)

```ts
class Account {
  private balance = 0;
  deposit(amount: number) {
    if (amount > 0) this.balance += amount;
  }
  getBalance() {
    return this.balance;
  }
}
```

### Real Usage:

```ts
const acc = new Account();
acc.deposit(100);
console.log(acc.getBalance());
```

---

## Slide 6: Inheritance & Overriding

```ts
class Animal {
  speak() {
    console.log("Animal sound");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}
```

### Real Usage:

```ts
const myDog = new Dog();
myDog.speak();
```

---

## Slide 7: Polymorphism

```ts
const animals: Animal[] = [new Dog(), new Animal()];
animals.forEach(a => a.speak());
```

* Same interface, multiple behaviors

---

## Slide 8: Interfaces

```ts
interface Logger {
  log(message: string): void;
}
class ConsoleLogger implements Logger {
  log(msg: string) {
    console.log("LOG:", msg);
  }
}
```

### Real Usage:

```ts
const logger = new ConsoleLogger();
logger.log("Hello from logger");
```

---

## Slide 9: Abstract Classes

```ts
abstract class Shape {
  abstract area(): number;
}
class Rectangle extends Shape {
  constructor(private w: number, private h: number) {
    super();
  }
  area(): number {
    return this.w * this.h;
  }
}
```

### Real Usage:

```ts
const rect = new Rectangle(5, 10);
console.log(rect.area());
```

---

## Slide 10: Composition Over Inheritance

```ts
class Engine {
  start() {
    console.log("Engine started");
  }
}
class Car {
  constructor(private engine: Engine) {}
  run() {
    this.engine.start();
  }
}
```

### Real Usage:

```ts
const engine = new Engine();
const car = new Car(engine);
car.run();
```

---

## Slide 11: Real OOP Class (Instance-based)

```ts
type PaymentDetails = {
  amount: number;
  currency: string;
  payerEmail: string;
};

type RedirectUrls = {
  success: string;
  failure: string;
};

class PaymentOrder {
  private status: "created" | "paid" | "failed" = "created";
  constructor(
    private orderId: string,
    private details: PaymentDetails,
    private urls: RedirectUrls
  ) {}
  create(): this {
    console.log(`Creating order ${this.orderId}`);
    return this;
  }
  pay(): this {
    if (this.details.amount <= 0) {
      this.status = "failed";
      console.log(`Payment failed → ${this.urls.failure}`);
    } else {
      this.status = "paid";
      console.log(`Payment succeeded → ${this.urls.success}`);
    }
    return this;
  }
}
```

### Real Usage:

```ts
new PaymentOrder("ORD001", { amount: 50, currency: "USD", payerEmail: "a@mail.com" }, {
  success: "/success",
  failure: "/fail"
}).create().pay();
```

---

## Slide 12: Static Version of Same Logic

```ts
class StaticPaymentProcessor {
  static successUrl = "/success";
  static failUrl = "/fail";

  static create(orderId: string, amount: number, currency: string) {
    console.log(`Creating ${orderId} for ${amount} ${currency}`);
  }
  static pay(orderId: string, amount: number) {
    if (amount <= 0) {
      console.log(`Payment failed → ${this.failUrl}`);
    } else {
      console.log(`Payment success → ${this.successUrl}`);
    }
  }
}
```

### Real Usage:

```ts
StaticPaymentProcessor.create("ORD002", 100, "EUR");
StaticPaymentProcessor.pay("ORD002", 100);
```

---

## Slide 13: Static vs. Non-Static

| Feature      | Non-Static                | Static                        |
| ------------ | ------------------------- | ----------------------------- |
| Needs `new`? | ✅ Yes                     | ❌ No                          |
| Holds state? | ✅ Per object              | ❌ Only class-wide             |
| Usage        | Per-user, per-order logic | Utility, global settings      |
| Example      | `order.create().pay()`    | `StaticOrderService.pay(...)` |

---

## Slide 14: Exercises

1. Create a `User` class with login/logout methods
2. Create an `Animal` interface and implement in `Cat`, `Dog`
3. Create a static `LoggerService`
4. Simulate destructor in a `SocketManager` class

---

## Slide 15: Summary

* OOP helps write modular, maintainable code
* Classes model real-world concepts
* TypeScript gives us types, safety, and strong design tools
* Learn the patterns, not just syntax

---

**Done.**
