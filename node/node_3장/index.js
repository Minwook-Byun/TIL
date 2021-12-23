const {odd, even} = require('./var')
const checkNumber = require('./func')

function checkStringOddEven(str) {
    if (str.length %2 ) {
        //1이면 true이므로 
        return odd
    }
    return even
}

console.log(checkNumber(10));
console.log(checkStringOddEven('hello')) 