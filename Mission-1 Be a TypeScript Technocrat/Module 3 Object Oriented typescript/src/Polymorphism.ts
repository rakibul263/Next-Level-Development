class Person {
  getSleep() {
    console.log(`I sleep for 8 hour.`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`I am a normal Student person. I sleep for 4 hour.`);
  }
}

class NextLevelDeveloper extends Person {
  getSleep() {
    console.log(`I am a next level developer. I sleep for 3 hours.`);
  }
}

const sleepingHour = (param: Person) => {
  param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

sleepingHour(person1);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  weight: number;
  constructor(height: number, weight: number) {
    super();
    this.height = height;
    this.weight = weight;
  }

  getArea(): number {
    return this.height * this.weight;
  }
}
