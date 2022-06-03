const string = 'The revolution will not be televised.';
console.log(string);

//bad string format
const badString = string;
console.log(badString);

//Single quotes and Double quotes
const sgl = 'Single quotes.';
const dbl = "Double quotes";
console.log(sgl);
console.log(dbl);

//few more examples
const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "I'm feeling blue.";
console.log(sglDbl);
console.log(dblSgl);

// Escaping characters in a string
const bigmouth = 'I have got no right to take my place...';
console.log(bigmouth);

//concatenating strings
const greetting = 'Hello';
const name = 'Chris';
const gretting = `Hello, ${name}`;
console.log(gretting); 

//join two variables
const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one} ${two}`;
console.log(joined);

const button = document.querySelector('button');

function greet(){
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click',greet);

//concatenation using "+"

console.log(greetting + "," +name);

//template literals give more readable code

console.log(`${greetting},${name}`);

//combining number and string 

const naame = "Front";
const number = 242;
console.log(`${naame}${number}`);

//Number converts anything into a number 

const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum);

//toString() converts it to the equivalent string

const myNum2 = 123;
const mystring2 =  myNum2.toString();
console.log(typeof mystring2);

//Including expressions in strings

const song = 'Fight the Youth';
const score = 9;
const highScore = 10;
const output = `I like the song ${song}. I gave it a score of ${score/highScore * 100}%.`;
console.log(output);

//Multiline strings

const outpput = `I like the song.
I gave it a score of 90%.`;
console.log(outpput);