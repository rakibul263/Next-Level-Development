// generic with interface
interface box<T> {
  value: T;
}

const box1: box<number> = {
  value: 10,
};

// another example
interface Developer<T> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: number;
  };
  smartWatch: T;
}

const poorDeveloper: Developer<{
  heartRate: string;
  stopWatch: boolean;
}> = {
  name: "Mr Poor",
  salary: 20000,
  device: {
    brand: "lenevo",
    model: "A21",
    releasedYear: 2019,
  },
  smartWatch: {
    heartRate: "200",
    stopWatch: false,
  },
};

// rich developer
const richDeveloper: Developer<{
  heartRate: string;
  stopWatch: boolean;
  callSupport: boolean;
  calculator: boolean;
}> = {
  name: "Mr rich",
  salary: 400000,
  device: {
    brand: "Macbook",
    model: "M4 Pro",
    releasedYear: 2026,
  },
  smartWatch: {
    heartRate: "140",
    stopWatch: true,
    callSupport: true,
    calculator: true,
  },
};
