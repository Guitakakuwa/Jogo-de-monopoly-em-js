// player class
function Player (name, id) {
    this.name = name;
    this.money = 0;
    this.inPrision = false;
    this.prisionTime = 0;
    this.position = 0;
    this.playerID = id;
    this.belongings = [];

    this.getName = function() {
        return this.name;
    };

    this.getID = function(){
        return this.playerID;
    };

    this.setPosition = function(newPosition){
        this.position = newPosition;
    };

    this.getPosition = function(){
        return this.position;
    };

    this.pay = function(value){
        //  sucess payment
        if(this.money >= value) {
            this.money -= value;
            return true;
        }

        // payment failiure
        else {
            return false;
        }
    };

    this.reciveMoney = function(value){
        this.money += value;
    };

    this.addProperty = function(newLand){
        (this.belongings).push(newLand);
    };

    this.getProperty = function(){
        return this.belongings;
    };

    this.getMoney = function(){
        return this.money;
    };

    this.isInPrision = function(){
        return this.inPrision;
    };

    this.getJailTime = function(){
        return this.prisionTime;
    };

    this.goToJail = function(){
        this.prisionTime = 3;
        this.inPrision = true;
    };

    this.getFree = function(){
        this.prisionTime = 0;
        this.inPrision = false;
    };

}

// adds a player, give him or her the starting money
// and puts it on the playersVetor
function createPlayer(name){
    newPlayer = new Player(name, playersVetor.length);
    newPlayer.reciveMoney(startingMoney);

    (playersVetor).push(newPlayer);
}

function gameStart(){
    createPlayer("Ronaldo");
    createPlayer("Geraldinho");
    createPlayer("Jamires");

    playerAtual = playersVetor[0];

    inicializeCasas();
    updateScreenInfo();
}

// sets the board
function inicializeCasas(){
    let propreidadeTeste = new Companhia(0, 700,300,"Carro do Vallone", 9);
    let propriedadeTeste2 = new CasaTabuleiro(1);
    let casaVazia;

    casaVetor.push(propreidadeTeste);
    casaVetor.push(propriedadeTeste2);

    for(let i = 2; i < 40; i++) {
        casaVazia = new CasaTabuleiro(i);
        casaVetor.push(casaVazia);
    }
}

function passTurn(){
    if(rolledDice == true) {
        turnNumber++;
        alteredPosition = false;
        rolledDice = false;
        playerAtual = playersVetor[turnNumber%(playersVetor.length)];
        updateScreenInfo();
    }
}

function updateScreenInfo(){
    document.getElementById('position_show').innerHTML = "nome do jogador";
    document.getElementById('money_show').innerHTML = "dinheiro atual";
}

function rollDice(){
    if(rolledDice == false) {
        diceOne = dice1.roll();
        diceTwo = dice2.roll2();
        printNumber2(diceOne);
        printNumber(diceTwo);

        rolledDice = true;

        //  must play again if same dices
        if(diceOne == diceTwo) {
            rolledDice = false;
        }

        //  must move after roll
        movePlayer(diceOne+diceTwo);
    }
}

function movePlayer(distance){
    let newPosition = playerAtual.getPosition() + distance;

    //  loops the board
    newPosition = newPosition % casaVetor.length;


    if(playerAtual.isInPrision() == false) {
        playerAtual.setPosition(newPosition);
    }

    //  if players is in prision
    else {
        // end of jail time
        if(playerAtual.prisionTime == 0){
            playerAtual.getFree();
        }

        else{
            playerAtual.prisionTime -= 1;
        }
    }
}

// trys to buy the property this player is landing on
function buyProperty(){
    let casaAtual = casaVetor[playerAtual.getPosition()];
    if(casaAtual instanceof Propriedade){
        if(casaAtual.owner == "bank") {
            if(playerAtual.pay(casaAtual.valorCompra) == true){
                casaAtual.owner = playerAtual.getName();
                playerAtual.addProperty(casaAtual);
                console.log("comprou!");
            }

            else {
                console.log("faltou dinheiro");
            }
        }

        else{
            console.log("esta propriedade já possui dono");
        }
    }

    else {
        console.log("Casa atual não é uma propeidade");
    }

}

function sellProperty(){

}

//  beggining of the execution
let playersVetor = [];
let casaVetor = [];
let gameRunning = true;
let turnNumber = 0;
let playerAtual;
let alteredPosition = false;
let rolledDice = false;
const startingMoney = 3500;
let diceOne = 0;
let diceTwo = 0;

// starts the game
gameStart();
