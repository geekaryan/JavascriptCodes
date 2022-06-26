

//for...of loops

const cats = ['Leopard', 'Serval', 'Jaguar','Tiger', 'Caracal', 'Lion'];

for(const cat of cats) {
    console.log(cat);
}

//map() used to do something to each item in  a collectin and create a new collection containig the changed item

function toUpper(string){
    return string.toUpperCase();
}

const upperCats = cats.map(toUpper);

console.log(upperCats);

//filter() is used to test each item in a collection, and create a new collection containing only items that match

function lCat(cat){
    return cat.startsWith('L');
}

const filtered = cats.filter(lCat);

console.log(filtered);

//standard for loop 
//for (intializer; condition; finalexpression){}

//for loop examples 

const results = document.querySelector('#results');

const results = document.querySelector('#results');

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += '\n...finished!';
}

const calculateBtn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear');

calculateBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', () => results.textContent = '');

