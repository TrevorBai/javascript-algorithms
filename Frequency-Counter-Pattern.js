// **************************************************
//       Frequency Counter Pattern
// **************************************************

// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array
// has it's corresponding value squared in the second array.
// The frequency of values must be the same.


// Time complexity O(n^2)
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false
    }
    // console.log(arr2)
    arr2.splice(correctIndex, 1)  // make sure the same frequency
  }
  return true
}

same([1, 2, 3, 2], [9, 1, 4, 4])

// Time complexity O(n)
const sameBetter = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

// console.log(sameBetter([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]))

// Anagrams

// Given two strings, write a function to determine if the second
// string is an anagram of the first. An anagram is a word, phrase,
// or name formed by rearranging the letters of another, such as
// cinema, formed from iceman.

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false
    }
  }
  return true
}

console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('rat', 'car'))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('qwerty', 'qeywrt'))
console.log(validAnagram('texttwisttime', 'timetwisttext'))

const validAnagramBetter = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }
  const lookup = {}
  for (char of str1) {
    lookup[char] ? lookup[char] += 1 : lookup[char] = 1
  }
  for (char of str2) {
    if (!lookup[char]) {
      return false
    } else {
      lookup[char] -= 1
    }
  }
  return true
}

console.log()
console.log(validAnagramBetter('', ''))
console.log(validAnagramBetter('aaz', 'zza'))
console.log(validAnagramBetter('anagram', 'nagaram'))
console.log(validAnagramBetter('rat', 'car'))
console.log(validAnagramBetter('awesome', 'awesom'))
console.log(validAnagramBetter('qwerty', 'qeywrt'))
console.log(validAnagramBetter('texttwisttime', 'timetwisttext'))


// Write a function called sameFrequency. Given two positive
// integers, find out if the two numbers have the same
// frequency of digits. Your solution MUST have the following
// complexities: Time: O(n)

const sameFrequency = (num1, num2) => {
  let str1 = num1.toString()
  let str2 = num2.toString()
  if (str1.length !== str2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
  }
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false
    }
    return true
  }
}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))

