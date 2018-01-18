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
<<<<<<< HEAD
    rollDice();
};

=======
    let result1 = dice1.roll();
    let result2 = dice2.roll2();
    printNumber2(result2);
    printNumber(result1);
}
>>>>>>> 34bd8d4c0c3e8934df9d9b7bb606f9089b5f857d

function VerifyEquals(dice1,dice2) {
	if (dice1===dice2) {
		return true;
	}
}
<<<<<<< HEAD
=======

>>>>>>> 34bd8d4c0c3e8934df9d9b7bb606f9089b5f857d
