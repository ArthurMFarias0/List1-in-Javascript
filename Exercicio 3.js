const prompt = require('prompt-sync')();
let seconds, minute, hour

const time = prompt('Seconds worked: ');

hour = time / 3600
minute = (hour % 3600) / 60
seconds = (hour % 3600) % 60

console.log('\nHours worked: '+hour);
console.log('\nMinutes worked: '+minute);
console.log('\nSeconds worked: '+seconds);