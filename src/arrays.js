// push, pop, shift, unshift

// 0) Сделай console.log(array) в конце сделал вывод [ 7, 'hello', 777 ]:
// - Удали последний элемент,
// - Удали первый элемент массива
// - Добавь в начало массива число 7
// - Добавь в конец массива число 777

let array = ["hi", "hello", "привет"]

console.log(array)


// -----------------------------------------------------------------------------------

// map и filter

// 1) Удвоение значений массива чисел:
const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.  // - допиши логику
// console.log(doubleNumbers)  // раскомментируй
// Вывод: [2,4,6,8,10]









// 2) Преобразование букв каждой строки в заглавные:
const fruit = ["apple", "banana", "cherry"];

// Вывод: ['APPLE', 'BANANA', 'CHERRY']








// 3) Выведи в консоль те объекты, цена которых (price) больше либо равно 15
const fruits = [
    {fruitName: "apple", price: 5, bought: false},
    {fruitName: "pineapple", price: 15, bought: true},
    {fruitName: "watermelon", price: 20, bought: true},
    {fruitName: "banana", price: 9, bought: true},
    {fruitName: "melon", price: 18, bought: true},
]


// Вывод:
// [
//   { fruitName: 'pineapple', price: 15, bought: true },
//   { fruitName: 'watermelon', price: 20, bought: true },
//   { fruitName: 'melon', price: 18, bought: true }
// ]






// 4) Выведи в консоль ЧИСЛОМ длины каждого элемента массива строк
const words = ["hello", "world", "how", "are", "you"];

// Вывод: [5, 5, 3, 3, 3]





// 5) Выведи в консоль все чётные числа:
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Вывод: [2, 4, 6, 8, 10]





// 6) Выведи в консоль все нечётные числа:
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Вывод: [1,3, 5, 7, 9]






// 7) Выведи в консоль только те объекты, у которых категория "fruits" И цена больше 3
const products = [
    {name: "Apple", category: "fruits", price: 1},
    {name: "Carrot", category: "vegetables", price: 2},
    {name: "Orange", category: "fruits", price: 3},
    {name: "Broccoli", category: "vegetables", price: 4},
    {name: "Banana", category: "fruits", price: 5}
];

/* Вывод:
[ { name: 'Banana', category: 'fruits', price: 5 } ]
*/





// 8) Выведи в консоль только те объекты, у которых категория "vegetables" И цена меньше 4
const products2 = [
    {name: "Apple", category: "fruits", price: 1},
    {name: "Carrot", category: "vegetables", price: 2},
    {name: "Orange", category: "fruits", price: 3},
    {name: "Broccoli", category: "vegetables", price: 4},
    {name: "Banana", category: "fruits", price: 5}
];

// Вывод:  [ { name: 'Carrot', category: 'vegetables', price: 2 } ]
