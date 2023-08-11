@classDecorator
class Boat {
  // @testDecorator
  color: string = 'red';

  // @testDecorator
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('This is an error oppss 1231231')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('speed');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key);
  console.log(index);
}

function logError(errorMsg: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMsg);
      }
    };
  };
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

// new Boat().pilot();
