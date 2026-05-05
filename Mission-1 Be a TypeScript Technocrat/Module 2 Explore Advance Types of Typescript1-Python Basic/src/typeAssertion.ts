let anything: any;
anything = 12;

anything as number;

let value: unknown = "Daffodil";
let result = value as string;
console.log(result);

const kgToGmConvert = (input: number | string): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    let [value] = input.split(" ");
    return `Converted output is ${Number(value) * 1000}`;
  }
};

let result1 = kgToGmConvert(12) as number;
console.log(result1);

let result2 = kgToGmConvert("14 kg") as number;
console.log(result2);
