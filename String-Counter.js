// **************************************************
//       PROBLEM SLOVING APPROACH
// **************************************************

// Write a function which takes in a string and returns counts of
// each character in the string.

const charCount = str => {
  // make object to return at end
  let res = {}
  // loop over string, for each character...
  // for (let i = 0; i < str.length; i++) {  //*****Old school way */
  for (let char of str) {
    char = char.toLowerCase()
    // if character is something else (space, period, etc.) don't do anything
    if (/[a-z0-9]/.test(char)) {
      // Old school way
      // // if the char is a number/letter AND is a key in object, add one to count
      // if (res[char] > 0) {
      //   res[char]++;
      // }
      // // if the char is a number/letter AND not in object, add it to object and set value to 1
      // else {
      //   res[char] = 1
      // }

      // Modern way
      res[char] = ++res[char] || 1
    }
  }
  // return object at end 
  return res
}

// A faster way
const charCountBetter = str => {
  let res = {}
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase()
      res[char] = ++res[char] || 1
    }
  }
  return res
}

const isAlphaNumeric = char => {
  let code = char.charCodeAt(0)
  if (!(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)) {
    return false
  }
  return true
}

// console.log(charCount('Hello'))
// console.log(charCount('hi there!!'))
// console.log(charCountBetter('Hello'))
// console.log(charCountBetter('hi there!!'))