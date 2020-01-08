// **************************************************
//       Multiple Pointers Pattern
// **************************************************

// Write a function called sumZero which accepts a ***SORTED***
// array of integers. The function should find the first pair
// where the sum is 0. Return an array that indicates both
// values that sum to zero or undefined if a pair does not exist

// Time Complexity: O(n^2)
// Space Complexity: O(1)
const sumZero = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))

// Time Complexity: O(n)
// Space Complexity: O(1)
const sumZeroBetter = arr => {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

console.log(sumZeroBetter([-4, -3, -2, -1, 0, 1, 2, 3, 10]))


// Implement a function called countUniqueValues, which accepts a ***SORTED***
// array, and counts the unique values in the array. There can be negative numbers
// in the array, but it will always be sorted.


// Time Complexity: O(n)
// Space Complexity: O(1)
const countUniqueValues = arr => {
  if (!arr.length) return 0
  let left = 0
  for (let right = 1; right < arr.length; right++) {
    if (arr[right] !== arr[left]) {
      left++
      arr[left] = arr[right]
    }
  }
  return ++left
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2, -1, -1, 0, 1]))