// 1. ReferenceError: variable is not defined
// console.log(x);

// Common solutions
// - define the variable
// - import from a package

// 2. TypeError: x is not a function
// const x = undefined;
// console.log(x());

// 3. TypeError: Cannot read properties of undefined
const user = {
  // key - value pairs aka properties
  id: 1,
  name: 'Bruce',
  address: {
    streetName: 'Wipplingerstraße',
    streetNumber: 56,
  },
};

// Accessing properties of an undefined property will cause a crash
// TypeError: Cannot read properties of undefined (reading 'streetName')
console.log('user.addresssss.streetName', user.addresssss.streetName);
