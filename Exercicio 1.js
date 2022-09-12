const prompt = require('prompt-sync')()
let ageInDays

const ageText = prompt('what your age: ');
const age = Number(ageText);
const monthText = prompt('Born month: ');
const month = Number(monthText);
const dayText = prompt('Born day: ');
const day = Number(dayText);

ageInDays = (age * 365 + month * 30 + day)
    console.log('lives days: '+ageInDays);