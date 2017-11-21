# jsproblems
Collection of JavaScript problems

Прикольно, что вы наткнулись на мой репозиторий. Ну раз наткнулись, заходите внутрь.  

Начнём с первой задачки. Хочу сказать, что задачки придумываю не я. Я только их решаю. Решаю для себя исключительно. Но я подумал и решил, что стоит сделать из этого миллионный репозиторий. 

# Задача 1
Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.

```javascript
//сама функция
function sequence(start = 0, step = 1){
    start -= step;

    function sum (){
        return start += step;
    }

    return sum;
}

//тестирование работы функции
var generator = sequence(10, 3);

var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8
```

# Задача 2 (Связана с задачей 1)
Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и возвращает массив с результатами вызовов. Она нам пригодится для отладки:

```javascript
//ф-ия из 1-ой задачи
function sequence(start = 0, step = 1){
    start -= step;

    function sum (){
        return start += step;
    }

    return sum;
}

//наша новая функция
function take(func, x){
    var res = [];
    for (i = 0; i<x; i++){
        res.push(func());
    }
    return res;
}

//тестирование. Всё работает
var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]
```