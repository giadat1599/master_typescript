class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(['a', 'b', 'c']);
new ArrayOfAnything<number>([1, 2, 3]);

// Example of generics with functions
function printStrings(arr: string[]): void {
  arr.forEach((e) => {
    console.log(e);
  });
}

function printNumbers(arr: number[]): void {
  arr.forEach((e) => {
    console.log(e);
  });
}

function printAnything<T>(arr: T[]): void {
  arr.forEach((e) => {
    console.log(e);
  });
}

printAnything(['a', 'b', 'c']);

// Generic Constraints

class Animal {
  print() {
    console.log('I am an Animal');
  }
}

class House {
  print() {
    console.log('I am a House');
  }
}

interface Printable {
  print(): void
}

function printHousesOrAnimals<T extends Printable>(arr: T[]): void {
  arr.forEach((e) => {
    e.print();
  });
}

printHousesOrAnimals<House>([new House(), new House()]);
printHousesOrAnimals<Animal>([new Animal(), new Animal()]);
