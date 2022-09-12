const prompt = require('prompt-sync')()
let year, month, day

const days = prompt('Lives days: ')

year = days / 365
month = (days % 365) / 30
day = (days % 365) % 30

console.log('\nYears: '+year)
console.log('\nMonth: '+month)
console.log('\nDays: '+day)