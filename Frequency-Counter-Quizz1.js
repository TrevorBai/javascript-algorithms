// **************************************************
//       Frequency Counter and Multiple Pointers
// **************************************************

// Implement a function called areThereDuplicates which accepts
// a variable number of arguments, and checks whether there are
// any duplicates among the arguments passed in. You can solve
// this using the frequency counter pattern OR the multiple pointers pattern.


// ****************** Frequency Counter ***********************
// Time Complexity: O(n)
// Space Complexity: O(n)
const areThereDuplicates = (...args) => {
  let frequencyCounter = {}
  for (let val of args) {
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
  }
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) return true
  }
  return false
}

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))
console.log(areThereDuplicates())


// ****************** Multiple Pointers ***********************
// Time Complexity: O(nlog(n))   ?? Not sure 
// Space Complexity: O(1)

const areThereDuplicatesAnother = (...args) => {
  // Two pointers
  args.sort()   // time complexity varies
  let left = 0
  let right = 1
  while (right < args.length) {
    if (args[left] === args[right]) {
      return true
    }
    left++
    right++
  }
  return false
}

console.log(areThereDuplicatesAnother(1, 2, 3))
console.log(areThereDuplicatesAnother(1, 2, 2))
console.log(areThereDuplicatesAnother('a', 'b', 'c', 'a'))
console.log(areThereDuplicatesAnother())


// ****************** Using Set ***********************
const areThereDuplicatesAnotherOne = (...args) => {
  return new Set(args).size !== args.length
}

console.log(areThereDuplicatesAnotherOne(1, 2, 3))
console.log(areThereDuplicatesAnotherOne(1, 2, 2))
console.log(areThereDuplicatesAnotherOne('a', 'b', 'c', 'a'))
console.log(areThereDuplicatesAnotherOne())