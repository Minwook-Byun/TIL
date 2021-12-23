// const {odd, even} = require('./var.js')

// function checkOddEven(num){
//     if(num % 2) {
//         return odd;
//     }
//     return even;
// }

// module.exports = checkOddEven;

import {odd, even} from './var';

function checkOddEven(num) {
    if(num % 2) {
        return odd;
    }
    return even;
}

export default checkOddEven;