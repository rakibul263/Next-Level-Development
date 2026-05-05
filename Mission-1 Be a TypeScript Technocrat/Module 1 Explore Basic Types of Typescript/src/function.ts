// function
// normal function, arrow function

// normal function
function sum(num1: number, num2: number) {
  return num1 + num2;
}

let result = sum(5, 19);
console.log(result);

// arrow function

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(add(10, 20));

// object => function => method
const poorUser = {
  name: "Shuvo",
  balance: 5000,
  addBalance(money: number): number {
    return (this.balance += money);
  },
};

console.log(poorUser.addBalance(2000));

const arr: number[] = [1, 4, 6];
const squareArray: number[] = arr.map((num) => num * num);
console.log(squareArray);
