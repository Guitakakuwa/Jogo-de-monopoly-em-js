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

}

function inicializeCasas(){
    let propreidadeTeste = new Companhia(0, 700,300,"Carro do Vallone", 9);
    let propriedadeTeste2 = new CasaTabuleiro(1);

    casaVetor.push(propreidadeTeste);
    casaVetor.push(propriedadeTeste2);
}

function passTurn(){
    turnNumber++;
    playerAtual = playersVetor[turnNumber%(playersVetor.length)];
}

// trys to buy the property this player is landing on
function buyProperty(){
    let casaAtual = casaVetor[playerAtual.getPosition()];
    if(casaAtual instanceof Propriedade){
        if(casaAtual.owner == "bank") {
            if(playerAtual.pay(casaAtual.valorCompra) == true){
                casaAtual.owner = playerAtual.getName();
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
const startingMoney = 3500;

// starts the game
gameStart();
