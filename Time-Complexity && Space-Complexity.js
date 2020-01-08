const { performance } = require('perf_hooks')


// **************************************************
//       TIME COMPLEXITY
// **************************************************
const addUpTo1 = n => {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
    console.log(i)
  }
  return total
}

const addUpTo2 = n => {
  return n * (n + 1) / 2
}

let t1 = performance.now()
// addUpTo1(10)
let t2 = performance.now()

let t3 = performance.now()
// addUpTo2(10)
let t4 = performance.now()

// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
// console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)

// console.log(addUpTo1(10))
// console.log(addUpTo2(10))


const printAllPaires = n => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}

// printAllPaires(10)

const logAtLeast5 = n => {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i)
  }
}

// logAtLeast5(3)

const logAtMost5 = n => {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i)
  }
}

// logAtMost5(3)


// **************************************************
//       SPACE COMPLEXITY
// **************************************************

// space complexity O(1)
const sum = arr => {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}

// O(n)
const double = arr => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i])
  }
  return newArr
}