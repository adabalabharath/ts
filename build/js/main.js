"use strict";
let username = "john";
console.log(username);
let a = 12;
let b = '6';
let c = 2;
let Str = ['hi', 'hello', 'welcome'];
let mixed = ['oh', 'ushh', 56];
//Str=mixed (couldnt add)
mixed = Str;
//array type
let tup = ['he', 34, true];
let alb = ['f', 5];
let g = {
    name: 'dave',
    albums: 5
};
//literal types
let user;
user = 'justin';
const logMsg = (message) => {
    console.log(message);
};
const add = (a, b) => {
    return a + b;
};
// interface math{
//     (a:number,b:number,c?:number):number
// }
const addAll = (a, b, c) => {
    if (c)
        return a + b + c;
    return a + b;
};
logMsg(add(3, 4));
logMsg(addAll(35, 5));
