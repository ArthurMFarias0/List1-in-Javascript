const prompt = require('prompt-sync')();
let media

const note1 = prompt('\nFirst note: ')
const note2 = prompt('Second note: ')
const note3 = prompt('Third note: ')

media = ((note1 * 2) + (note2 * 3) + (note3 * 5)) / (2 + 3 +5)

console.log('\nFinal media: '+ media)