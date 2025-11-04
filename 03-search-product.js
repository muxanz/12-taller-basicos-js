const prompt = require('prompt-sync')();

let userInput = prompt('Busca producto => ').toLowerCase();

const inventory = [
    { name: "Laptop", price: 1150 },
    { name: "Monitor", price: 450 },
    { name: "Desktop", price: 1550 },
    { name: "Mouse", price: 150 }
]

function searchProduct(item) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name.toLowerCase() === item) {
            return inventory[i];
        } else {
            continue;
        }
    }
    return null;
}

console.log(searchProduct(userInput));