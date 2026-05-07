// Problem - 01
function filterEvenNumbers(numbers: number[]) {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log(evenNumbers);
}
filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Problem - 02
function reverseString(input: string) {
  let reverse = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reverse += input[i];
  }
  console.log(reverse);
}

reverseString("typescript");

// Problem - 03
type StringOrNumber = string | number;
function checkType(input: StringOrNumber) {
  if (typeof input === "number") {
    console.log("Number");
  } else if (typeof input === "string") {
    console.log("String");
  }
}
checkType("Hello");
checkType(42);

// Problem - 04
const getProperty = <T, K extends keyof T>(obj: T, key: K): void => {
  console.log(obj[key]);
};
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");

// Problem - 05
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): void => {
  const updatedBook = {
    ...book,
    isRead: true,
  };

  console.log(updatedBook);
};

const myBook = {
  title: "Next Level Development",
  author: "Md Rakibul Hasan",
  publishedYear: 2026,
};

toggleReadStatus(myBook);

// Problem - 06
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}
const student = new Student("Alice", 20, "A");
student.getDetails();

// Problem - 07
const getIntersection = (arr1: number[], arr2: number[]): void => {
  const result = arr1.filter((num) => arr2.includes(num));

  console.log(result);
};
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
