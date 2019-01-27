const people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9},
  {name: 'John', age: 40},
  {name: 'Ann', age: 19},
  {name: 'Elisabeth', age: 16}
]

// every method checks if every element of array passes the condition and return true or false
const everyoneIsTeen = people.every((persone) => persone.age > 10 && persone.age < 21)
// some method checks if at least one element of array passes the condition and return true or false
const someIsTeen = people.some((persone) => persone.age > 10 && persone.age < 21)

console.log(everyoneIsTeen)
console.log(someIsTeen)
