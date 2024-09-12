// // CommonJS - old way
// const fs = require('node:fs')

// // ESM - new way
// import fs from 'node:fs';

// Named exports (curlies)
import { animalCount, isAnimal } from './imports/a.js';
// for importing every export
// import * as a from './imports/a.js';
// Default export (no curlies)
import sum2 from './imports/b/c.js';

console.log('animalCount', animalCount);

console.log(isAnimal());

console.log(sum2(1, 2));
