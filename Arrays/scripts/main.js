const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);

const sequence = [1,1,2,3,5,8,13];
const random = ['tree', 795, [0,1,2]];

console.log(sequence);
console.log(random);

//finding length of an array 

console.log(shopping.length);

//Accessing and modifying array items

console.log(shopping[0]);

//we can also modify by giving a single array item a new value

shopping[0] = 'tahini';
console.log(shopping);

//accesing a multidimensional array

console.log(random[2][2]);

//Finding items in a array use of indexOf()

const birds = ['Parrot','Falcon','Owl'];
console.log(birds.indexOf('Owl'));
console.log(birds.indexOf('Rabbit'));

//Adding items in array by using push()

const cities = ['Manchester', 'Liverpool'];
cities.push('Candriff');
console.log(cities);
cities.push('Bradford', 'Brighton');
console.log(cities);

//Add an item to the start of the array, use unshift()

cities.unshift('Edinburgh');
console.log(cities);

//Removing items from the array, use pop()

cities.pop(); //pop removes only last item from the array
console.log(cities);

//removing the first item from an array , we use shift()
cities.shift(); //shift removes only first item from the array
console.log(cities);

//If we knew the index of an item we can remove it from the array using splice();

const ciities = ['Manchester','Liverpool','Edinburgh','Carlisle'];
const index = ciities.indexOf('Liverpool');
if (index !== -1) {
    ciities.splice(index, 1);
}
console.log(ciities);

//Accessing every item using for...of statement

const biirds = ['Parrot', 'Falcon', 'Owl'];

for (const bird of biirds){
    console.log(bird);
}

//use of map()

function double(number) {
    return number *2;
}
const numbers = [5,2,7,6];
const doubled = numbers.map(double);
console.log(doubled);

//use of filter()

function isLong(city){
    return city.length > 8;
}
const citties = ['London', 'Liverpool','Totnes','Edinburgh'];
const longer = citties.filter(isLong);
console.log( longer);

//converting between strings and arrays split() method

const data = 'Manchester, London, Liverpool, Birmingham, Leeds, Carlisle';

const citiies = data.split(',');
console.log(citiies);

console.log(citiies.length);
console.log(citiies[0]);
console.log(citiies[1]);
console.log(citiies.length - 1); // the last item in the array

//join() method

const commaSeperated = citiies.join(',');
console.log(commaSeperated);

//another way of converting to a string is to use the toString() method...

const dogNames = ['Rocket', 'Flash', 'Bella', 'Slugger'];
console.log(dogNames.toString());
