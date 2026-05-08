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

// instanceof
class Car {
  drive() {
    console.log("drive car...");
  }
}
class Bike {
  ride() {
    console.log("Bike Ride...");
  }
}

function operate(vehicle: Bike | Car) {
  if (vehicle instanceof Bike) {
    vehicle.ride();
  } else {
    vehicle.drive();
  }
}

operate(new Car());
operate(new Bike());

// access modifier = koi theke access kora jabe kothay theke access kora jabe na
class Driver {
  public name: string;
  private nid: string;
  protected earning: number;

  constructor(name: string, nid: string, earning: number) {
    this.name = name;
    this.nid = nid;
    this.earning = earning;
  }
}

const driverName = new Driver("Rakibul", "nidbd323323", 1300);
console.log(driverName.name);

// inheritance
class ProDriver extends Driver {
  constructor() {
    super("Shuvo", "nidbd12", 2300);
    this.earning = 3000;
  }
  certifiedDriver() {
    console.log("He is a pro driver");
  }
}
const nextGenDriver = new ProDriver();
console.log(nextGenDriver);
nextGenDriver.certifiedDriver();

// Getter and Setter
class Wallet {
  private _balance: number = 0;

  get balance() {
    return this._balance;
  }

  set deposit(amount: number) {
    if (amount > 0) {
      this._balance += amount;
    }
  }
}

const wallet1 = new Wallet();
wallet1.deposit = 1500;
console.log("Bank balance is : ", wallet1.balance);
