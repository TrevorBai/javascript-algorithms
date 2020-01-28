// **************************************************
//       Pivot Helper Function
// **************************************************

const pivot = (arr, stIdx = 0, edIdx = arr.length - 1) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  // Pivot about the first value of the array
  let pivotIdx = stIdx
  let pivot = arr[stIdx]
  for (let i = stIdx + 1; i < edIdx + 1; i++) {
    if (arr[i] < pivot) {
      pivotIdx++
      swap(arr, pivotIdx, i)
    }
  }
  swap(arr, pivotIdx, stIdx)
  return pivotIdx
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))
// console.log(pivot([9, 4, 8, 2, 1, 5, 7, 6, 3]))


// **************************************************
//       Quick Sort
// **************************************************

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right)
    quickSort(arr, left, pivotIdx - 1)
    quickSort(arr, pivotIdx + 1, right)
  }
  return arr
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]))
console.log(quickSort([4, 6, 9, 1, 2, 5, 3, -1, -2, 49, -29, 0]))