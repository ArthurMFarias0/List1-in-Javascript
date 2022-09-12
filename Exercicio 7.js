const prompt = require('prompt-sync')();
let x, y

const a = prompt('\nValue of A: ')
const A = Number(a);

const b = prompt('Value of B: ')
const B = Number(b);

const c = prompt('Value of C: ')
const C = Number(c);

const d = prompt('Value of D: ')
const D = Number(d);

const e = prompt('Value of E: ')
const E = Number(e);

const f = prompt('Value of F: ')
const F = Number(f);

x = ((C * E) - (B * F)) / ((A * E) - (B * D))
y = ((A * F) - (C * D)) / ((A * E) - (B * D))

console.log('\nValue of X: '+ x)
console.log('Value of Y: '+ y)