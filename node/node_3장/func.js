const {odd, even} = require('./var.js')

function checkOddEven(num){
    if(num % 2 == 0 ) {
        return odd;
    }
    return even;
}

module.exports = checkOddEven;