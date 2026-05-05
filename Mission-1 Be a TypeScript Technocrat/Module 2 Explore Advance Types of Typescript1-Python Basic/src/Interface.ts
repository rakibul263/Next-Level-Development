interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  roll: number;
}

const student1: Student = {
  name: "Rakibul Hasan",
  age: 30,
  roll: 630,
};

console.log(student1);
