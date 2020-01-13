// **************************************************
//       Capitalize First
// **************************************************

// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter
// of each string in the array

const capitalizeFirst = arr => {
  if (arr.length === 1) {
    let str = arr[0]
    let newStr = ''
    if (str.length !== 0) {
      return newStr.concat(str[0].toUpperCase()).concat(str.slice(1))
    }
    return newStr
  }
  if (arr.length > 1) {
    let newArr = []
    for (let str of arr) {
      newArr.push(capitalizeFirst(Array(str)))
    }
    return newArr
  }
}

// console.log(capitalizeFirst(['car', 'taco', 'banana']))

// **************************************************
//       Nested Even Sum
// **************************************************

// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object 
// which may contain nested objects.

// const nestedEvenSum = obj => {
//   if (Object.keys(obj).length === 0) return 0
//   let sum = 0
//   let temp = 0
//   const flattenedObj = {...obj}
//   for (let key in flattenedObj) {
//     if (flattenedObj[key] % 2 === 0) {
//       temp = flattenedObj[key]
//       delete flattenedObj[key]
//       sum += temp
//     }
//   }
//   console.log(flattenedObj)
//   return nestedEvenSum(flattenedObj) + sum

// }

const nestedEvenSum = (obj) => {
  let sum = 0
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key])
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key]
    }
  }
  return sum
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
}

// console.log(nestedEvenSum(obj1)) // 6
// console.log(nestedEvenSum(obj2)) // 10


// **************************************************
//       Capitalize Words
// **************************************************

// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array
// containing each word capitalized.

const capitalizeWords = arr => {
  if (arr.length === 0) return []
  let newArr = []
  newArr.push(arr[0].toUpperCase())
  return newArr.concat(capitalizeWords(arr.slice(1)))
}

// let words = ['i', 'am', 'learning', 'recursion']
// console.log(capitalizeWords(words))


// **************************************************
//       Stringify Numbers
// **************************************************

// Write a function called stringifyNumbers which
// takes in an object and finds all of the values
// which are numbers and converts them to strings.
// Recursion would be a great way to solve this!

// // Modify the original object
// const stringifyNumbers = obj => {
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] = obj[key].toString()
//     } else if (typeof obj[key] === 'object') {
//       stringifyNumbers(obj[key])
//     }
//   }
//   return obj
// }

const stringifyNumbers = obj => {
  let newObj = {}
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString()
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66
//     }
//   }
// }

// console.log(stringifyNumbers(obj))


// **************************************************
//       Collect Strings
// **************************************************

// Write a function called collectStrings which
// accepts an object and returns an array of all 
// the values in the object that have a typeof string.

const collectStrings = obj => {
  let arr = []
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      arr.push(obj[key])
    } else if (typeof obj[key] === 'object') {
      // concat does not mutate the original arrays, so if we need catch the change
      // we have to assign it back
      arr = arr.concat(collectStrings(obj[key]))
    }
  }
  return arr
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

console.log(collectStrings(obj))
