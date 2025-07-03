* `public`, `private`, `protected`, `readonly`
* `class`, `inheritance`, `extends`
* `method overloading`
* `static` და `non-static` მეთოდები

---

## ✅ სავარჯიშო 1: წვდომის მოდიფიკატორები (`public`, `private`, `protected`, `readonly`)

```ts
class Person {
  public name: string;
  private age: number;
  protected nationality: string;
  readonly id: number;

  constructor(name: string, age: number, nationality: string, id: number) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
    this.id = id;
  }

  public getDetails(): string {
    return `${this.name} is ${this.age} years old.`;
  }

  private secret(): string {
    return "This is a secret!";
  }

  protected getNationality(): string {
    return this.nationality;
  }
}

const p = new Person("Giorgi", 25, "Georgian", 12345);
console.log(p.name);       // ✅ public
// console.log(p.age);     // ❌ private
// console.log(p.nationality); // ❌ protected
// p.id = 99;             // ❌ readonly
console.log(p.getDetails());
```

🎯 **დავალება სტუდენტისთვის**:

* სცადეთ წვდომა `age`, `nationality`, და `id` ველებზე.
* დაამატეთ მეთოდი `public showNationality()` კლასში, რომ გამოიტანოს `nationality`.

---

## ✅ სავარჯიშო 2: მემკვიდრეობა (`class`, `extends`, `super`, `protected`)

```ts
class Animal {
  protected sound: string;

  constructor(sound: string) {
    this.sound = sound;
  }

  public makeSound(): void {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  private breed: string;

  constructor(sound: string, breed: string) {
    super(sound); // მშობლის კონსტრუქტორის გამოძახება
    this.breed = breed;
  }

  public bark(): void {
    console.log(`Dog of breed ${this.breed} says: ${this.sound}`);
  }
}

const d = new Dog("Woof", "Labrador");
d.makeSound();
d.bark();
```

🎯 **დავალება სტუდენტისთვის**:

* დაამატეთ ახალი კლასები `Cat` და `Bird` და მემკვიდრეობით მიიღეთ `Animal`.
* თითოეულში დაამატეთ `speak()` ფუნქცია რომელიც იყენებს `this.sound`.

---

## ✅ სავარჯიშო 3: მეთოდის გადატვირთვა (Method Overloading)

```ts
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}

const calc = new Calculator();

console.log(calc.add(5, 10));          // 15
console.log(calc.add("Hello, ", "TS"));// Hello, TS
```

🎯 **დავალება სტუდენტისთვის**:

* დაამატეთ `multiply(a: number, b: number): number` და სცადეთ გადატვირთვა სტრინგისთვისაც.

---

## ✅ სავარჯიშო 4: `static` და `non-static` თვისებები და მეთოდები

```ts
class MathUtil {
  static PI: number = 3.14;

  static circleArea(radius: number): number {
    return this.PI * radius * radius;
  }

  logMessage(): void {
    console.log("Logging from an instance method.");
  }
}

console.log(MathUtil.circleArea(5));   // static method
// MathUtil.logMessage();             // ❌ Error

const util = new MathUtil();
util.logMessage();                     // non-static method
```

🎯 **დავალება სტუდენტისთვის**:

* დაამატეთ `static square(n: number): number`.
* გამოიყენეთ ორივე მეთოდი `circleArea` და `square` `main.ts` ფაილში.

---

