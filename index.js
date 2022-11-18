var a, b

function add() {}
function subtract() {}
function multiply() {}
function add(a, b) {
    return `${a + b} `
}
console.log(add(15, 607))

function  subtract(a, b) {
    return `${a-b}`
}
console.log(subtract(447, 1))

function multiply(a, b) {
    return `${a*b}`
}
console.log(multiply(27648, 1))

function divide(a, b) {
    return `${a/b}`
}
console.log(divide(0.17455310199789695, 1))

function increment(a) {
    return `${++a}`
}
console.log(increment(657))

function  decrement(a) {
    return `${--a}`
}
console.log(decrement(474))

function  makeInt(a) {
   return parseInt(a, 10)
}


function preserveDecimal(a) {
    return parseFloat(a)
}
console.log(preserveDecimal(2.222))

