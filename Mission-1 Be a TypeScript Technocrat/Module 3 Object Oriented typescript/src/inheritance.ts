class Parent {
  constructor(
    public name: string,
    public age: number,
    public address: string,
  ) {}

  getSleep(hour: number) {
    console.log(
      `Student name is:  ${this.name}. He is sleeping almost ${hour} and his age is ${this.age} and address is ${this.address}`,
    );
  }
}

class Student extends Parent {}

const student1 = new Student("Rakibul Hasan", 23, "Mirpur-13, Dhaka");
student1.getSleep(10);

class Teacher extends Parent {
  constructor(
    public name: string,
    public age: number,
    public address: string,
    public designation: string,
  ) {
    super(name, age, address);
  }

  getClass() {
    console.log(`${this.name} hour class nen.`);
  }
}

const Teacher1 = new Teacher(
  "Zaidur Rahman",
  23,
  "Palashbari",
  "Assistant Head Teacher",
);

Teacher1.getClass();
