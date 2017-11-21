'use strict'

function sequence(start = 0, step = 1){
    start -= step;

    function sum (){
        return start += step;
    }

    return sum;
}

var generator = sequence(10, 3);

var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8