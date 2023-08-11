let apples = 5
let speed = 'fast'
let hasName = true
let nothingMuch = null
let nothing = undefined

// built in objects
let now = new Date()

type A = {
  a: boolean
  b: boolean
}

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1,2,3]
let truths: boolean[] = [true, false, true]

// Classes
class Car {}
let car: Car = new Car()

// Object literal
let point: { x: number, y: number } = {
  x: 10,
  y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// When to use annotations
// 1. Function that returns the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates: { x: number, y: number } = JSON.parse(json)

// 2. When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'bue']
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if(words[i] === 'green') {
    foundWord = true
  }
}

// 3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}