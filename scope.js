// Scope: limiting information to certain areas in the code

// 1.function scope
function sum(numberA, numberB) {
  const result = numberA + numberB;
  console.log('numberA', numberA);
  console.log('result', result);
  return result;
}

// These will not be accessible because of function scope
// console.log('numberA', numberA);
// console.log('result', result);

console.log('sum(1,2)', sum(1, 2));

// 2. block scope
let age = 20;

// - if conditional
if (age > 21) {
  const isAllowed = true;
  console.log('isAllowed', isAllowed);
}

// This will not be accessible because of block scope
// console.log('isAllowed', isAllowed);

// 3. let vs var vs const

// - errors accessing const and let variables before declaration

// This will cause an error, because the variable is not yet initialized:
// noReturnValue3();

const noReturnValue3 = () => {};

// - hoisting with var and function keywords

noReturnValue2();

function noReturnValue2() {}

// console.log('a', a);

if (age > 18) {
  var ab = 1;
}

console.log('ab', ab);
