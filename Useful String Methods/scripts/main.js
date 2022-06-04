//Finding the length of the string

const browserType = 'mozilla';
console.log(browserType.length);

//retrieving a specific string character

console.log(browserType[0]);

//to get the last character of any string

console.log(browserType[browserType.length - 1]);

//finding substring inside a string we use .includes()

const browserTyype = 'moazilla';

if(browserTyype.includes('zilla')){
    console.log('Found zilla');
}else{
    console.log('No zilla here!');
}

//if we want to know a string starts or ends with a particular substing we use two special methods startsWith() and endsWith()

const bowserType = 'mozilla';

if(bowserType.startsWith('zilla')){
    console.log('Found zilla!');
}else{
    console.log('No zilla here!');
}

if(bowserType.endsWith('zilla')){
    console.log('Found zilla!');
}else{
    console.log('No zilla here!');
}

//we can find the position of substring in string using indexOf()

const tagline ='MDN - Resources for developers, by developers';
console.log(tagline.indexOf('developers'));

console.log(tagline.indexOf('x'));

const firstOccurence = tagline.indexOf('developers');
const secondOccurence = tagline.indexOf('developers', firstOccurence + 1);

console.log(firstOccurence);
console.log(secondOccurence);

//extracting a substring from a string 
//using slice() method

console.log(browserType.slice(1,4));

console.log(browserType.slice(2));

//changing Case Lowercase or uppercase 
//using toLowerCase() and toUpperCase()

const radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

//updating parts of a string using the replace() method

let brwserType = 'mozilla';
const updated = brwserType.replace('moz', 'van');
console.log(updated);
console.log(brwserType);

brwserType = brwserType.replace('moz', 'van');
console.log(brwserType);

//to change all occurence we can use replaceAll()

let quote = 'To be or not to be';
quote = quote.replaceAll('be','code');
console.log(quote);