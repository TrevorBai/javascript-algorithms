// ***********************************************************
//       Sliding Window and Multiple Pointers Pattern Quizz3
// ***********************************************************

// Write a function called findLongestSubstring, which accepts
// a string and returns the length of the longest **CONSECUTIVE**
// substring with all distinct characters.


// Time Complexity: O(n)
const findLongestSubstring = (str) => {
  let longest = 0
  let seen = {}
  // Double Pointers
  let start = 0
  for (let end = 0; end < str.length; end++) {
    let char = str[end]
    // all seen char's should have a truthy value
    // then we need update the start pointer
    if (seen[char]) {
      start = Math.max(start, seen[char])
    }
    // find the width of window and store the largest one
    longest = Math.max(longest, end - start + 1)
    // Store where each char's next char is located in str
    // Reason is all seen char's should have a truthy value
    // That is why we increment by 1 to make sure every value
    // of key value pair in the object does not have value of 0
    seen[char] = end + 1
  }
  return longest
}

console.log(findLongestSubstring(''))   // 0
console.log(findLongestSubstring('rithmschool'))   // 7
console.log(findLongestSubstring('thisisawesome'))   // 6
console.log(findLongestSubstring('thecatinthehat'))   // 7
console.log(findLongestSubstring('bbbbbb'))  // 1
console.log(findLongestSubstring('longestsubstring'))  // 8
console.log(findLongestSubstring('thisishowwedoit'))  // 6
