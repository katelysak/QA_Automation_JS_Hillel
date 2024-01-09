/* let carFuel = "gas" // "disel"
let carSize = S //M, L, XL
написати функцію яка працюватиме як заправка, в залежності від того який розмір авто і тип палива - відправляти на відповідну дозаправку
приклад: 
let carFuel = "disel"
let carSize = XL
myFunc(carFuel, carSize)
в кнсоль виведеться : "заправка для XL авто, тип палива "disel""
____ variant 2
let carFuel = "gas" 
let carSize = M
myFunc(carFuel, carSize)
в кнсоль виведеться : "заправка для М авто, тип палива "gas""
зробити виклик функції з всіма комбінаціями включаючи значення за замовчуванням ()
приклад myFunc() 
в кнсоль виведеться : - "заправка для XL авто, тип палива "disel""
*/


function gasStation(carFuel = "disel", carSize = "XL") {
    if (carSize === "S") {
        console.log(`Заправка для S авто, тип палива "${carFuel}"`);
    } else if (carSize === "M") {
        console.log(`Заправка для M авто, тип палива "${carFuel}"`);
    } else if (carSize === "L") {
        console.log(`Заправка для L авто, тип палива "${carFuel}"`);
    } else if (carSize === "XL") {
        console.log(`Заправка для XL авто, тип палива "${carFuel}"`);
    } else {
        console.log('Error');
    }
}

gasStation();                           // returns default values
gasStation('test1', 'test2');           // returns 'Error'
gasStation('gas', 'S');
gasStation('gas', 'M');
gasStation('gas', 'L');
gasStation('gas', 'XL');
gasStation('disel', 'S');
gasStation('disel', 'M');
gasStation('disel', 'L');
gasStation('disel', 'XL');

/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.

*/

function createCounter(init) {
    let counter = init;

    return {
        increment() {
            counter++;
            return counter;
        },
        decrement() {
            counter--;
            return counter;
        },
        reset() {
            counter = init;
            return counter;
        }
    }
}


const counter = createCounter(10);

console.log(counter.increment());       // Returns 11
console.log(counter.increment());       // Returns 12
console.log(counter.increment());       // Returns 13
console.log(counter.decrement());       // Returns 12
console.log(counter.reset());           // Returns 10