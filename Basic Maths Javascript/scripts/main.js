const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;
console.log(myInt);

//converting Decimals to fixed number of Decimals

const lotsofDecimal = 1.89579487594357;
console.log(lotsofDecimal);
const twoDecimalPlaces = lotsofDecimal.toFixed(2);
console.log(twoDecimalPlaces);

//converting String into Number
let myNumber ='74';
Number(myNumber) + 3;

//Arithmetic Operations

let sum = 6+9;
console.log(sum);

let subtract = 20-15;
console.log(subtract);

let multiply = 3*7;
console.log(multiply);

let divide = 10/5;
console.log(divide);

let modulo = 8%3;
console.log(modulo);

let exponent = 5**2;
console.log(exponent);

//Increment Operator
let num1 = 4;
num1++;
console.log(num1);

//Decrement Operator
let num2 = 6;
num2--;
console.log(num2);

//Assign Operator
let x = 3;
let y = 4;
x = y;

//Shortcut to make code cleaner

//Add operator
x += 4;
console.log(x);

//Sub operator
x -=3;
console.log(x);

//Multipy Operator
x *= 3;
console.log(x);

//Divison operator
x /=5;
console.log(x);

//Comparison operator

//Strict equality
5 === 2 +4;

//Strict-non-equality operator
5 !== 2+3;

//less than operator
10 < 6;

//greater than operator
10 > 20;

//less than or equal to operator
3 <=2;

//greater than or equal to operator
5 >= 4;

const btn = document.querySelector('button');
const txt = document.querySelector('p');
btn.addEventListener('click',updateBtn);
function updateBtn() {
    if(btn.textContent === 'Start machine'){
        btn.textContent = 'Stop machine';
        txt.textContent = 'The machine has started';
    }else{
        btn.textContent = 'Start machine';
        txt.textContent = 'The machine is stopped';
    }
}