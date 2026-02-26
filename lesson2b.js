// Comparison Operators
// They ussually evaluate to boolean answer
let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1 == number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)
console.log(number1 != number1)


// Logical Operators are used to evaluate two or more conditions and they give a boolean answer.
// Logical AND (&&): evaluates to true only if all of the conditions are true
console.log((number1 < number2) && (number2 > number1) && (number3 > number2))

// Logical OR(||) : evaluates to true if at least one of the conditiioons/statements is true.
console.log((number1 > number2) || (number2 > number1))

// Logical NOT (!): used to negate statements.
console.log(!(number1 < number2))
