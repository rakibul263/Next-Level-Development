// object use
type User = {
  id: number;
  name: string;
  age: number;
};

const user1: User = {
  id: 1234,
  name: "Shuvo",
  age: 30,
};

console.log(user1);

// for function use case
type add = (num1: number, num2: number) => number;
const sum: add = (num1, num2) => {
  return num1 + num2;
};

console.log(sum(1, 2));
