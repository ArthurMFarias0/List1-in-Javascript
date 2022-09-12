const prompt = require('prompt-sync')();
let d, r, r2

//declaration of variables
const x1 = prompt('Value of x1: ')
const a = Number(x1);

const x2 = prompt('Value of x2: ')
const a2 = Number(x2);

const y1 = prompt('Value of y1: ')
const b = Number(y1)

const y2 = prompt('Value of y2: ')
const b2 = Number(y2)

//Processing
r = Math.pow(a2 - a, 2.0)
r2 = Math.pow(b2 - b, 2.0)

d = Math.sqrt(r + r2, 2)

console.log('\nResult: '+ d)