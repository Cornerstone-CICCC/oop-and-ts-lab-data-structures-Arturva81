// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require('../lib/Stack')

function calcDistance(stack, a, b) {
  let distance = 0
  let foundA = false
  let foundB = false

  while (!stack.isEmpty()) {
    const current = stack.pop()
    if (current === a) {
      foundA = true
    }
    if (current === b) {
      foundB = true
    }
    if (foundA || foundB) {
      distance++
    }
    if (foundA && foundB) {
      break
    }
  }

  return distance
}

const students = new Stack()
students.push("John")
students.push("Joe")
students.push("Jane")
students.push("Jill")
students.push("Jim")

const distance = calcDistance(students, "Joe", "Jim")
console.log(distance) // 3
const distance2 = calcDistance(students, "Joe", "Jill")
console.log(distance2) // 2