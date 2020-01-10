// **************************************************************
//       Sliding Window and Multiple Pointers Pattern Quizz2
// **************************************************************

// Write a function called minSubArrayLen which accepts two parameters
// - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed 
// to the function. If there isn't one, return 0 instead.

// Time Complexity: O(n^2)
// Space Complexity: O(1)
const minSubArrayLen = (arr, num) => {
  let tempSum = 0
  let minLen = +Infinity
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i + 1; j++) {
      tempSum += arr[i + j - 1]
      if (tempSum >= num) {
        tempSum = 0
        minLen = Math.min(minLen, j)
        // console.log('i:' + i + ' Min length:' + minLen)
        break
      }
      if (j === arr.length - i) tempSum = 0
    }
  }
  return (minLen === Infinity) ? 0 : minLen
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))   // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))     // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))  // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39))  // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55))  // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11))  // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95))  // 0

// *************************************************************************************
// Time Complexity: O(n)
// Space Complexity: O(1)
// Recursion doesn't work properly
// const minSubArrayLen = (arr, num) => {
//   let tempSum = 0
//   let minLen = +Infinity
//   for (let i = 0; i < arr.length; i++) {
//     tempSum += arr[i]
//     if (tempSum >= num) {
//       minLen = Math.min(minLen, i + 1)
//       break
//     }
//   }
//   for (let i = minLen; i > 1; i--) {
//     tempSum -= arr[minLen - i]
//     if (tempSum >= num) {
//       minLen = Math.min(minLen, i - 1)
//     }
//   }
//   arr.splice(0, minLen)
//   if (minLen === 1) return 1
//   if (!arr) return (minLen === Infinity) ? 0 : minLen
//   return minSubArrayLen(arr, num)
// }

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))   // 2
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))     // 2
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))  // 1
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39))  // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55))  // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11))  // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95))  // 0



// *********************************************************************************
// This approach is very tricky
// Time Complexity: O(n)
// Space Complexity: O(1)
const minSubArrayLen = (arr, sum) => {
  let total = 0
  // Double pointers
  let start = 0
  let end = 0
  let minLen = Infinity

  while (start < arr.length) {
    // Shift window to right if current window doesn't add up to the given sum
    if (total < sum && end < arr.length) {
      total += arr[end]
      end++
    }
    // Shrink window from left if current window adds up to at least the given sum
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start)
      total -= arr[start]
      start++
    }
    // Current total is less than given sum but the end pointer reaches the end
    else {
      break
    }
  }
  return minLen === Infinity ? 0 : minLen
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))   // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))     // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))  // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39))  // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55))  // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11))  // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95))  // 0