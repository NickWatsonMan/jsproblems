//Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и 
//возвращает массив с результатами вызовов. Она нам пригодится для отладки:


function sequence(start = 0, step = 1){
    start -= step;

    function sum (){
        return start += step;
    }

    return sum;
}

function take(func, x){
    var res = [];
    for (i = 0; i<x; i++){
        res.push(func());
    }
    return res;
}


var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]