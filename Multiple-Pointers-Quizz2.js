// **************************************************
//       Multiple Pointers Quizz2
// **************************************************

// Write a function called isSubsequence which takes in two strings and
// checks whether the characters in the first string form a subsequence
// of the characters in the second string. In other words, the function
// should check whether the characters in the first string appear
// somewhere in the seconde string, without their order changing.


// ****************** Multiple Pointers ***********************
// Time Complexity: O(n + m)
// Space Complexity: O(1)

const isSubsequence = (str1, str2) => {
  let i = 0
  for (let j = 0; j < str2.length; j++) {
    if (str2[j] === str1[i]) i++
    if (i === str1.length) return true
  }
  return false
}

// console.log(isSubsequence('hello', 'hello world'))
// console.log(isSubsequence('sing', 'sting'))
// console.log(isSubsequence('abc', 'abracadabra'))
// console.log(isSubsequence('abc', 'acb'))
// console.log(isSubsequence('abc', 'acc'))



// ******* Multiple Pointers (Iterative)***********************
// Time Complexity: O(n + m)
// Space Complexity: O(1)

const isSubsequenceIterative = (str1, str2) => {
  let i = 0
  let j = 0
  if (!str1) return true
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++
    if (i === str1.length) return true
    j++
  }
  return false
}

console.log(isSubsequenceIterative('hello', 'hello world'))
console.log(isSubsequenceIterative('sing', 'sting'))
console.log(isSubsequenceIterative('abc', 'abracadabra'))
console.log(isSubsequenceIterative('abc', 'acb'))
// console.log(isSubsequenceIterative('abc', 'acc'))

// ******* Multiple Pointers (Recursive)***********************
// Time Complexity: O(n + m)
// Space Complexity: not O(1) but O(?)  ?? Not sure
// slice() method returns a new string which will occupy memory
// so space complexity could be O(n) or O(m)

const isSubsequenceRecursive = (str1, str2) => {
  if (str1.length === 0) return true
  if (str2.length === 0 || str2.length < str1.length) return false
  if (str2[0] === str1[0]) return isSubsequenceRecursive(str1.slice(1), str2.slice(1))
  return isSubsequenceRecursive(str1, str2.slice(1))
}

console.log(isSubsequenceRecursive('hello', 'hello world'))
console.log(isSubsequenceRecursive('sing', 'sting'))
console.log(isSubsequenceRecursive('abc', 'abracadabra'))
console.log(isSubsequenceRecursive('abc', 'acb'))
// console.log(isSubsequenceRecursive('abc', 'acc'))