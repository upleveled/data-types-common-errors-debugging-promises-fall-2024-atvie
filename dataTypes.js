// --- Primitives ---

// Boolean
const myBoolean = true;

let myBoolean2 = true;
myBoolean2 = false;

// Create a boolean using a conditions
let age = 20;
const isBigger = age > 25;

// Number
const num = 5; // Integer

const pi = 3.14; // Floating point number

let num2 = 5;
num2 = 10;

// NaN = Not a Number
console.log(10 * 'a');

// String
const str = 'Hey Omer';
const strDoubleQuotes = "Hey Omer's dog";
// Backticks: multiple lines and interpolation
const strBackticks = `line one
line two
number of ducks: ${num2}`;

console.log(strBackticks);

let str2 = 'Hey Omer';
str2 = 'Hey Karl';

// Adding strings together
const result = str + ' ' + strDoubleQuotes;
const result2 = `${str} ${strDoubleQuotes}`;
console.log(result);
console.log(result2);

// String methods
console.log('length', str2.length);
console.log('replace', str2.replace('Karl', 'Karl2'));
console.log('slice', str2.slice(0, 5));
console.log('substr', str2.substr(0, 5));
console.log('substring', str2.substring(0, 5));
console.log('toLowerCase', str2.toLowerCase());
console.log('toUpperCase', str2.toUpperCase());

// Undefined - something hasn't been initialized yet, doesn't exist at all
const un = undefined;

const obj = { abc: 123 };

// Accessing a property that doesn't exist = undefined
const un2 = obj.nonDefinedKey;
console.log('obj.nonDefinedKey', un2);

// Null - explicit marking that something doesn't exist
const n = null;

// Use case: setting a user to not exist after logging out

// --- Non-Primitives ---

// Object
const user = {
  // key - value pairs aka properties
  id: 1,
  name: 'Bruce',
  address: {
    streetName: 'Wipplingerstraße',
    streetNumber: 56,
  },
};

// Property access
console.log('user.name', user.name); // Dot notation
console.log('user.address.streetName', user.address.streetName);

// Accessing properties of an undefined property will cause a crash
// TypeError: Cannot read properties of undefined (reading 'streetName')
// console.log('user.typo.streetName', user.typo.streetName);

const key = 'id';
console.log('user[property]', user[key]); // Bracket notation
console.log('user.key', user.key); // This shows 'undefined'

// Updating a property in an object
user.name = 'Sara';
console.log('Updated user.name', user.name);

// Array - lists of value
const arr = [];

const prices = [10, 12, 47];

const animals = [
  {
    id: 1,
    type: 'Cat',
    name: 'Anika',
  },
  {
    id: 2,
    type: 'Penguin',
    name: 'Barry',
  },
  {
    id: 3,
    type: 'Rooster',
    name: 'Colt',
  },
  {
    id: 4,
    type: 'Dog',
    name: 'Drago',
  },
  {
    id: 5,
    type: 'Anteater',
    name: 'Ethan',
  },
];

console.log('animals[1]', animals[1]);

// -- Array methods --

// Loop methods - loop over all values
console.log(
  'map',
  prices.map((price) => price + 1),
);

// Equivalent without arrow function - we usually avoid this
console.log(
  'map',
  prices.map(function priceMapper(price) {
    return price + 1;
  }),
);

console.log(
  'filter',
  prices.filter((price) => {
    return price > 11;
  }),
);

console.log(
  'find',
  prices.find((price) => {
    return price > 11;
  }),
);

console.log('forEach');
prices.forEach((price) => {
  console.log(price + 1);
});

// Alternative for more "normal loop" for...of
console.log('for...of');
for (const price of prices) {
  console.log(price + 1);
}

// pop, shift, unshift - retrieve or modify array items

// Modifying the array

// push, slice, splice
prices.push(48);
console.log('after push', prices);

// spread operator
console.log('spread operator [...prices, 100, 200]', [...prices, 100, 200]);

animals[1].name = 'Barry2';

console.log('animals[1]', animals[1]);

// --- Function ---
// function keyword
function noReturnValue2() {}
console.log('noReturnValue2()', noReturnValue2());

// arrow function
const noReturnValue3 = () => {};
console.log('noReturnValue3()', noReturnValue3());

function sum(numberA, numberB) {
  return numberA + numberB;
}
console.log('sum(1, 2)', sum(1, 2));
