// **************************************************
//       Linear Search Exercise
// **************************************************

// Write a function called linearSearch which accepts an
// array and a value, and returns the index at which the
// value exists. If the value does not exist in the array,
// return -1. Do not use indexOf to implement this function!

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i
  }
  return -1
}

// console.log(linearSearch([10, 15, 20, 25, 30], 15))
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4))
// console.log(linearSearch([100], 100))
// console.log(linearSearch([1, 2, 3, 4, 5], 6))
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10))
// console.log(linearSearch([100], 200))


// **************************************************
//       Binary Search Exercise
// **************************************************

// Write a function called binarySearch which accepts a
// *** SORTED ***array and a value and returns the index 
// at which the value exists. Otherwise, return -1.

const binarySearch = (arr, val) => {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === val) return mid
    if (arr[mid] < val) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}

// console.log(binarySearch([1, 2, 3, 4], 1))  // 0
// console.log(binarySearch([1, 2, 3, 4, 5], 2))  // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3))  // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5))  // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6))  // -1
// console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
// 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10))  // 2
// console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
// 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95))  // 16
// console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
// 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100))  // -1


// **************************************************
//       Naive String Search Implementation
// **************************************************

// Write a function called naiveSearch which accepts a
// longer string and a shorter string pattern. Find the
// times of the shorter string pattern appears in longer string.

const naiveSearch = (long, short) => {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break
      if (j === short.length - 1) count++
    }
  }
  return count
}

console.log(naiveSearch('lorie loled', 'lol'))