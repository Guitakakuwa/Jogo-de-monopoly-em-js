let dice1 = {
    sides: 6,
    roll: function() {
        let randomNumber = Math.floor(Math.random() * this.sides) + 1;
        console.log();randomNumber;
        return randomNumber;
    }
}
let dice2 = {
    sides2: 6,
    roll2: function() {
        let randomNumber2 = Math.floor(Math.random() * this.sides2) + 1;
        console.log();randomNumber2;
        return randomNumber2;
    }
}
function printNumber(number) {
    let placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}
function printNumber2(number2) {
    let placeholder2 = document.getElementById('placeholder2');
    placeholder2.innerHTML = number2;
}

let button_roll = document.getElementById('button_roll');
button_roll.onclick = function() {
    rollDice();
};

