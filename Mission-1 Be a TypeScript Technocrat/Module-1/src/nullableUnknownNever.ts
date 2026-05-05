const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB :  ${input}`);
  } else {
    console.log(`From DB All User`);
  }
};

getUser(null);

// unknown
const getDiscount = (input: unknown) => {
  if (typeof input === "number") {
    let result = input * 0.1;
    console.log(`Discount price is ${result}`);
  } else if (typeof input === "string") {
    let splitInput = input.split(" ")[0];
    let result = Number(splitInput) * 0.1;
    console.log(`Discount price is ${result}`);
  } else {
    console.log("Input is null");
  }
};

getDiscount(100);
getDiscount("100 Tk");
getDiscount(null);

// never
const throwError = (msg: string): never => {
  throw new Error(msg);
};
