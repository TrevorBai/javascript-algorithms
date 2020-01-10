// **************************************************
//       RECURSION
// **************************************************

// First recursion
const countDown = num => {
  if (num <= 0) {
    console.log('All done!')
    return
  }
  console.log(num)
  num--
  countDown(num)
}

// countDown(3)


// Second recursion
const sumRange = num => {
  if (num === 1) return 1
  return num + sumRange(num - 1)
}

// console.log(sumRange(3))


// Factorial iteratively
const factorialIterative = num => {
  let factorial = 1
  for (let i = num; i > 1; i--) {
    factorial *= i
  }
  return factorial
}

// console.log(factorialIterative(4))

// Factorial recursively
const factorialRecursive = num => {
  if (num === 1) return 1
  return num * factorialRecursive(num - 1)
}

// console.log(factorialRecursive(5))

// **************************************************
//       HELPER METHOD RECURSION
// **************************************************

// Design Pattern
const outer = input => {
  let outerScopedVariable = []
  // below is a recursive helper function
  const helper = helperInput => {
    // Modify the outerScopedVariable
    helper(helperInput--)
  }
  helper(input)
  return outerScopedVariable
}

// A concrete example
const collectOddValues = arr => {
  let result = []
  const helper = helperInput => {
    if (helperInput.length === 0) return
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0])
    helper(helperInput.slice(1))
  }
  helper(arr)
  return result
}

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]))


// **************************************************
//       PURE RECURSION
// **************************************************

const collectOddValuesPureRecursion = arr => {
  let newArr = []
  if (arr.length === 0) return newArr
  if (arr[0] % 2 !== 0) newArr.push(arr[0])
  newArr = newArr.concat(collectOddValuesPureRecursion(arr.slice(1)))
  return newArr
}

console.log(collectOddValuesPureRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9]))

