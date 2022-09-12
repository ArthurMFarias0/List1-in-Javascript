const prompt = require('prompt-sync')()
let r, s, result

const a = prompt('\nValue of A: ')
const aA = Number(a);
const b = prompt('Value of B: ')
const bB = Number(b);
const c = prompt('Value of C: ')
const cC = Number(c);

r = Math.pow(aA + bB, 2)
s = Math.pow(bB + cC, 2)

result = (r+s) / 2

console.log('\nFinal result: '+ result)