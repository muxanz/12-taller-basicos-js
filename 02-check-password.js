const prompt = require('prompt-sync')();

let userPassword = prompt('Contraseña => ');

function checkPassword(passwd) {
    if (passwd.length >= 8) {
        if (passwd.search(/\d/g) !== -1) {
            if (passwd.search(/[A-Z]/) !== -1) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(checkPassword(userPassword));