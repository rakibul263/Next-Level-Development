const arrayOfNum: number[] = [1, 4, 6];
const arrayOfString: string[] = ["1", "4", "8"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);

type AreaOfNumber = {
  height: number;
  weight: number;
};

type AreaOfString = {
  height: string;
  weight: string;
};
