
interface PersonInterface{
  firstname: string,
  lastname: string,
  phone:number,
  email: string
}


let a = 7;


class Person{
  // Static class & Nonstatic
  public firstname : string = "";
  public lastname : string = "";
  public phone : number = 0;
  public email : string = "";

  public constructor(a : string){
    // ავტომატურად ხდებ constructor ფუნქციის გაშვება
    this.firstname = "David";
    this.lastname = a;
  }

  public setPhone(phone_number : number){
    // SETER - მიმნიჭებელი
    this.phone = phone_number;
  }

  public getFullName(){
    // GETER = გეტერ- - გამომტანი - აუთფუთზე მიმღები
    return this.firstname + " "+ this.lastname;
  }
}

let person = new Person("Leen");                 // კლასის ონჯექთი
person.setPhone(571435678);

export default function Home() {

  console.log(person);

  return (
    <main>
      <h1>Full name: {person.getFullName()}</h1>
    </main>
  );
}
