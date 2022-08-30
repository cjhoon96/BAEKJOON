const {odd, even} = require('./3_3_var');
const checkNumber = require('./3_3_func');

function checkStringOddOrEven(str) {
    if (str.length % 2 ) {
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));