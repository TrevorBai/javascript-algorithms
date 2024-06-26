// **************************************************
//       Merge (way naive, least optimal)
// **************************************************

// This merge method is very intuitive but very not efficient.
// Every time we call merge method, it would create an array to store
// all the elements from both arrays. There is a more efficient but 
// less-intuitive way to achieve the merge process just IN PLACE with 
// the help of ONE extra helper array. That's it, no more new declared 
// array in the merge method. So really think about that method.
const merge = (arr1, arr2) => {
  let sortedArr = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      sortedArr.push(arr1[i])
      i++
    } else {
      sortedArr.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    sortedArr.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    sortedArr.push(arr2[j])
    j++
  }
  return sortedArr
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100]))
// console.log(merge([1, 10, 50], [2, 14]))
// console.log(merge([], [2, 14]))
// console.log(merge([100], [1, 2, 3, 5, 14]))


// **************************************************
//       Merge Sort
// **************************************************

const mergeSort = (arr) => {
  if (arr.length === 1) return arr
  let mid = Math.floor(arr.length / 2)
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

console.log(mergeSort([5, 3, 2, 1, 122, 24, 57, 31, -9]))
