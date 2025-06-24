// Define an interface for a Person
interface PersonInterface {
  firstname: string;
  lastname: string;
  phone: number;
  email: string;
}

// A sample variable
let a = 7;

// Define a class for a Person
class Person {
  // Properties of the class (non-static)
  public firstname: string = "";
  public lastname: string = "";
  public phone: number = 0;
  public email: string = "";

  // Constructor is called automatically on object creation
  public constructor(a: string) {
    this.firstname = "David";
    this.lastname = a;
  }

  // Setter method to assign phone number
  public setPhone(phone_number: number): void {
    this.phone = phone_number;
  }

  // Getter method to return the full name
  public getFullName(): string {
    return this.firstname + " " + this.lastname;
  }
}

// Create an object of the class
let person = new Person("Leen");
person.setPhone(571435678);

// React functional component
export default function Home() {
  console.log(person);

  return (
    <main>
      <h1>Full name: {person.getFullName()}</h1>
    </main>
  );
}
