// **************************************************
//       Insertion Sort
// **************************************************

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > cur; j--) arr[j + 1] = arr[j]
    arr[j + 1] = cur
  }
  return arr
}

console.log(insertionSort([2, 1, 9, 76, 4]))