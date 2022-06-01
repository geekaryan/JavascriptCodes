const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

buttonA.onclick = () =>{
    const name = prompt ('What is your name?');
    alert(`Hello ${name}, nice to see you!`);
    headingA.textContent = `Welcome ${name}`;
}


let myName;
let myAge;
let myEmail;
let mySocialAccount;

myName = 'Aryan';
myAge = 17;

myName = 'Bob';
myAge = 40;

let myNameArray = ['Aryan','Bob','Rana'];
let myNumberArray = [10,15,40];

let dog = { name: 'Spot', breed: 'Husky'};

myNaame = 'Chris';

function logName(){
    console.log(myNaame);
}

logName();

var myNaame;