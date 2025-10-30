const prompt = require('prompt-sync')();

function tipCalc(total, percentage) {
    return (total * percentage) / 100 + total;
}

let total = parseInt(prompt('Ingresa total compra => $'));
let percentage = parseInt(prompt('Ingresa valor propina (%) => '));

console.log(`
    ----------------
    FACTURA DE VENTA
    ----------------
    Compra => $${total}
    Propina => ${percentage}%
    TOTAL => $${tipCalc(total, percentage)}
    `);