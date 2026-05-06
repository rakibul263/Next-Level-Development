/* class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  // method
  makeSound() {
    console.log(`${this.name} is making ${this.sound}.`);
  }
} */

// parameter properties
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}
  // method
  makeSound() {
    console.log(`${this.name} is making ${this.sound}.`);
  }
}

const dog = new Animal("kitty", "dog", "ghaw ghaw");

console.log(dog.name);
console.log(dog.species);
console.log(dog.sound);
dog.makeSound();
