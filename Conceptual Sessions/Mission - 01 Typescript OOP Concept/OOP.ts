class Ride {
  rider: string;
  distance: number;

  constructor(bikeRider: string, bikeDistance: number) {
    this.rider = bikeRider;
    this.distance = bikeDistance;
  }

  calculateOil(): number {
    return this.distance * 0.5;
  }
}

const ride1 = new Ride("Rakibul", 20);
console.log(ride1);
console.log(ride1.calculateOil());

// typeguard
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

printId("abc");
printId(123.456);
