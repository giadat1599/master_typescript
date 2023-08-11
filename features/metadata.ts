import 'reflect-metadata';

// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('note', 'hi there', plane, 'color');
// const note = Reflect.getMetadata('note', plane, 'color');

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);
// console.log(note);
// console.log(height);

@printMetadata()
class Plane {
  color: string = 'red';

  @markFunction('This is my secret')
  fly(): void {
    console.log('vrrrrrrr');
  }
}

function markFunction(secret: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secret, target, key);
  };
}

function printMetadata() {
  return function (target: typeof Plane) {
    console.log(target.prototype['color']);
    const properties = Object.getOwnPropertyNames(target.prototype).filter(
      (e) => e !== 'constructor'
    );
    for (let key of properties) {
      const secret = Reflect.getMetadata('secret', target.prototype, key);
      console.log(secret);
    }
  };
}
