/*

    Modules Export & Import

*/

import { a, myArray, sayHello } from './app.js';

console.log(a);
console.log(myArray);
console.log(sayHello("Mohamed"));

for(let number of myArray)
{
    console.log(number);
}