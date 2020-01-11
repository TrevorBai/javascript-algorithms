// **************************************************
//       Fizz Buzz Problem
// **************************************************

// if it can divided by 3, output 'Fizz', if by 5,
// output 'Buzz', if by both, outpu 'FizzBuzz'

// Solution #1
const fizzBuzz = (num1, num2) => {

  for (let i = 1; i <= 20; i++) {
    let output = ''
    if (i % num1 === 0) output += 'Fizz'
    if (i % num2 === 0) output += 'Buzz'
    if (output === '') { output = i }
    console.log(output)
  }
}

// fizzBuzz(3, 5)

// Solution #2
const fizzBuzzBetter = (...args) => {
  let len = args.length
  for (let i = 1; i <= args[len - 1]; i++)
    console.log(
      (i % args[0] ? '' : 'fizz') + (i % args[1] ? '' : 'buzz') || i
    )
}

fizzBuzzBetter(3, 5, 20)