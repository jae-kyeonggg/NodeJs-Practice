const {odd, even} = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    }
    return even;
}

console.log('10은 ' + checkNumber(10));
console.log('hello는 ' + checkStringOddOrEven('hello'));