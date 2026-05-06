class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(hour: number) {
    console.log(`${this.name} ei student doinik ${hour} gonta gumay`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(hour: number) {
    console.log(`${this.name} ei student doinik ${hour} gonta study kore.`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(classhour: number) {
    console.log(`${classhour} hour ${this.name} class ney.`);
  }
}

const getInfo = (user: Person) => {
  if (user instanceof Student) {
    user.doStudy(10);
  } else if (user instanceof Teacher) {
    user.takeClass(5);
  } else {
    user.getSleep(7);
  }
};

const student = new Student("Rakibul hasan");
const teacher = new Teacher("Zaidur Rahman");

getInfo(student);
