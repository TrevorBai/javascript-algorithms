// **************************************************
//       REVERSE
// **************************************************

// Write a recursive function called reverse which accepts
// a string and returns a new string in reverse.

const reverse = str => {
  if (str.length <= 1) return str
  return reverse(str.slice(1)) + str[0]
}

// console.log(reverse('awesome'))
// console.log(reverse('rithmschool'))


// **************************************************
//       IS PALINDROME
// **************************************************

// Write a recursive function called isPalindrome which
// returns true if the string passed to it is a palindrome
// (reads the same forward and backward). Otherwise it
// returns false.

const isPalindrome = str => {
  if (str.length <= 1) return true
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
  return false
}

// console.log(isPalindrome('aa'))
// console.log(isPalindrome('awesome'))
// console.log(isPalindrome('foobar'))
// console.log(isPalindrome('tacocat'))
// console.log(isPalindrome('amanaplanacanalpanama'))
// console.log(isPalindrome('amanaplanacanalpandemonium'))


// **************************************************
//       SOME RECURSIVE
// **************************************************

// Write a recursive function called someRecursive which
// accepts an array and a callback. The function returns
// true if a single value in the array returns true
// when passed to the callback. Otherwise it returns false.

const someRecursive = (arr, callback) => {
  if (arr.length === 0) return false
  if (callback(arr[0])) return true
  return someRecursive(arr.slice(1), callback)
}

const isOdd = val => val % 2 !== 0

// console.log(someRecursive([1, 2, 3, 4], isOdd))
// console.log(someRecursive([4, 6, 8, 9], isOdd))
// console.log(someRecursive([4, 6, 8], isOdd))
// console.log(someRecursive([4, 6, 8], val => val > 10))

// **************************************************
//       Flatten
// **************************************************

// Write a recursive function called flatten which
// accepts an array of arrays and returns a new
// array with all values flattened.

const flatten = arr => {
  let newArr = []
  if (!arr.length) return []
  if (arr[0].length) {
    return flatten(arr[0]).concat(flatten(arr.slice(1)))
  } else {
    newArr.push(arr[0])
    return newArr.concat(flatten(arr.slice(1)))
  }
}

console.log(flatten([1, 2, 3, [4, 5]]))
console.log(flatten([1, [2, [3, 4], [[5]]]]))
console.log(flatten([[1], [2], [3]]))
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))