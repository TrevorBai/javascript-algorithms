// **************************************************
//       Swapping
// **************************************************

// ES5
const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

// ES2015
const swapNewer = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}


// **************************************************
//       Bubble Sort
// **************************************************

// Naive solution
const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        // let temp = arr[j]
        // arr[j] = arr[j+1]
        // arr[j+1] = temp
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

// console.log(bubbleSort([37, 45, 29, 8]))

// Better solution
const bubbleSortBetter = arr => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    console.log('ONE PASS COMPLETE!')
  }
  return arr
}

// console.log(bubbleSortBetter([37, 45, 29, 8, 12, 88, -3]))

// Better and cleaner solution
// Optimized with noSwaps
const bubbleSortBetterAndCleaner = arr => {
  let noSwaps
  console.log(noSwaps)
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

// console.log(bubbleSortBetterAndCleaner([37, 45, 29, 8, 12, 88, -3]))
console.log(bubbleSortBetterAndCleaner([8, 1, 2, 3, 4, 5, 6, 7]))