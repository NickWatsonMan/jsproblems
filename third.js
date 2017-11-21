/*Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и 
обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример: */



function map(func, arr){
    var result = [];
    for (i = 0; i<arr.length; i++){
        result.push(func(arr[i]));
    }
    return result;
}


function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]