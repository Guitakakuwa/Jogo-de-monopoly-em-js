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

let button = document.getElementById('button');

button.onclick = function() {
    let result1 = dice1.roll();
    let result2 = dice2.roll2();
    printNumber2(result2);
    printNumber(result1);
}

function VerifyEquals(dice1,dice2) {
	if (dice1===dice2) {
		return true;
	}
}

