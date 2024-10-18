var name = "abdelrhman";
let level = "dragon";
const path = "Back_end";

console.log(`Hello! my name is ${name} and iam ${level} in ${path}`)

//Equal or Not
function trueorfalse(a, b) {
    return a === b
}
console.log(trueorfalse(0, []))


//Arithmetic operators
let sum = 5 + 5
let difference = 5 - 3
let product = 5 * 5
let division = 8 / 2
let remainder = 5 % 2
console.log("Arithmetic results:", sum, difference, product, division, remainder)


//Even or odd
function evenorodd(c) {
    if (c % 2 === 0) {
        console.log(`the number ${c} is even`)
    } else {
        console.log(`the number ${c} is odd`)
    }
}
evenorodd(4)

//Comparison operators
console.log('5' == 5)
console.log('5' === 5)
console.log(5 > 7)

//Logical operators
console.log(true && false)
console.log(true || false)
console.log(!false)

// type coercion
console.log(1 + '3') // 1 turned to string
console.log(1 * '3') // 3 turned to number
console.log(false + 2) // false = 0