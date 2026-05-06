// conditional type : je type condition er upor nirvorshil
type A = null;
type B = undefined;

type C = A extends null ? true : B extends undefined ? true : false;

type RichPeopleVehicle = {
  bike: string;
  car: string;
  ship: string;
};

type checkVehicle<T> = T extends keyof RichPeopleVehicle ? true : false;

type HasBike = checkVehicle<"bike">;
