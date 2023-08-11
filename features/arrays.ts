const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

const carsByMake: string[][] = []

// Help with inference when extracting values
const mycar = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values
// carMakers.push(1)

// Help with 'map'
carMakers.map((car): string => {
  return car
})

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-1')
importantDates.push(new Date())
// importantDates.push(2)