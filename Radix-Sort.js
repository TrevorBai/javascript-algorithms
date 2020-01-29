// **************************************************
//       Radix Sort Helpers
// **************************************************

// **************************************************
//   Helper Function 1 Get Digit given the place
// **************************************************

const getDigit = (num, place) => {
  const numStr = num.toString()
  if ((numStr.length - 1 - place) < 0) return 0
  return +numStr[numStr.length - 1 - place]
}

// console.log(getDigit(12345, 0))  // 5
// console.log(getDigit(12345, 1))  // 4
// console.log(getDigit(12345, 2))  // 3
// console.log(getDigit(12345, 3))  // 2
// console.log(getDigit(12345, 4))  // 1
// console.log(getDigit(12345, 5))  // 0
// console.log(getDigit(12345, 50))  // 0

// #######################################################
const getDigitBetter = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

// console.log(getDigit(12345, 0))  // 5
// console.log(getDigit(12345, 1))  // 4
// console.log(getDigit(12345, 2))  // 3
// console.log(getDigit(12345, 3))  // 2
// console.log(getDigit(12345, 4))  // 1
// console.log(getDigit(12345, 5))  // 0
// console.log(getDigit(12345, 50))  // 0
// console.log(getDigit(-12345, 12))  // 0
// console.log(getDigit(-12345, 5))  // 0 ??? NaN

// **************************************************
//   Helper Function 2 Get Digit Count
// **************************************************

const digitCount = num => {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// console.log(digitCount(0))  // 1
// console.log(digitCount(1))  // 1
// console.log(digitCount(25))  // 2
// console.log(digitCount(314))  // 3
// console.log(digitCount(21388))  // 5

// **************************************************
//   Helper Function 3 Get Most Digits
// **************************************************

const mostDigits = numsArr => {
  let mostDigits = 1
  for (let i = 0; i < numsArr.length; i++) {
    // if (digitCount(numsArr[i]) > mostDigits) mostDigits = digitCount(numsArr[i])
    mostDigits = Math.max(digitCount(numsArr[i]), mostDigits)
  }
  return mostDigits
}

// console.log(mostDigits([1234, 56, 7]))  // 4
// console.log(mostDigits([1, 1, 11111, 1]))  // 5
// console.log(mostDigits([12, 34, 56, 78]))  // 2



// **************************************************
//       Radix Sort
// **************************************************

const radixSort = numsArr => {
  const maxDigitCount = mostDigits(numsArr)
  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let j = 0; j < numsArr.length; j++) {
      digitBuckets[getDigit(numsArr[j], i)].push(numsArr[j])
    }
    numsArr = [].concat(...digitBuckets)
  }
  return numsArr
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))