const prompt = require('prompt-sync')();
let distributorPercentage, tax, consumerCost

const Cost = prompt('Enter the factory cost: ')
const factoryCost = Number(Cost)


distributorPercentage = factoryCost * 0.28
tax = factoryCost * 0.45

consumerCost = factoryCost + distributorPercentage + tax

console.log('The cost to the consumer is: ', consumerCost)