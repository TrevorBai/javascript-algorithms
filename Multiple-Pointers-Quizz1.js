// **************************************************
//       Multiple Pointers Quizz1
// **************************************************

// Write a function called averagePair. Given a ***SORTED*** array of
// integers and a target average, determine if there is a pair of values
// in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.


// ****************** Multiple Pointers ***********************
// Time Complexity: O(n)
// Space Complexity: O(1)
// There could be a better structured way to do it
const averagePair = (arr, num) => {
  let right = 1
  if (arr.length === 0 || arr.length === 1) return false
  for (let left = 0; left <= arr.length - 2; left++) {
    // check the average
    if ((arr[left] + arr[right]) / 2 === num) {
      return true
    } else if ((arr[left] + arr[right]) / 2 > num) {
      return false
    } else {
      // first increase right pointer
      right++
    }

    if ((arr[left] + arr[right]) / 2 === num) {
      return true
    } else if ((arr[left] + arr[right]) / 2 > num) {
      return false
    }
  }
}

console.log(averagePair([1, 2, 3], 2.5))
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
console.log(averagePair([], 4))



// ****************** Multiple Pointers ***********************
// Time Complexity: O(n)
// Space Complexity: O(1)

const averagePairBetter = (arr, num) => {
  let start = 0
  let end = arr.length - 1
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === num) return true
    else if (avg < num) start++
    else end--
  }
  return false
}

console.log(averagePairBetter([1, 2, 3], 2.5))
console.log(averagePairBetter([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePairBetter([-1, 0, 3, 4, 5, 6], 4.1))
console.log(averagePairBetter([], 4))
