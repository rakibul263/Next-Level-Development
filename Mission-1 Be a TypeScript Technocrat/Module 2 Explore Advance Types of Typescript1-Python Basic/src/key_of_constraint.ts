type RichPeopleVehicle = {
  car: string; // key : value
  bike: string;
  cng: string;
};

type myVehicle1 = "bike" | "car" | "cng";
type myVehicle2 = keyof RichPeopleVehicle;

const myVehicle: myVehicle2 = "bike";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 1263,
  name: "Rakibul",
  address: {
    city: "Dhaka",
  },
};

const getPropertyFromObject = (obj: User, key: keyof User) => {
  return obj[key];
};

const result3 = getPropertyFromObject(user, "name");
console.log(result3);
