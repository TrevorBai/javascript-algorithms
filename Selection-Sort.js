// **************************************************
//       Selection Sort
// **************************************************

// Naive version one
const selectionSort = arr => {
  let min = arr[0]
  let minIdx = 0
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        minIdx = j
      }
    }
    if (minIdx !== i) {
      [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]]
      min = arr[i + 1]
    }
  }
  return arr
}

// console.log(selectionSort([37, 45, 29, 8, 12, 88, -3]))
// console.log(selectionSort([34, 22, 10, 19, 17]))


// Version two
const selectionSortBetter = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j
    }
    if (minIdx !== i) [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]]
  }
  return arr
}

console.log(selectionSortBetter([37, 45, 29, 8, 12, 88, -3]))
console.log(selectionSortBetter([34, 22, 10, 19, 17]))
console.log(selectionSortBetter([0, 2, 34, 22, 10, 19, 17]))