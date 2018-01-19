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

function getPlayerIndexByName (name) {
    for(let i = 0; i < playersVetor.length; i++){
        if(playersVetor[i].getName() == name) {
            return i;
        }
    }

    return -1;
}

function setPlayerColors(){
    let playerColor;

    //TODO change to mantin LAST POSITION BEFORE REWRITE
    //  there is a better way to do this
     for(let i = 0; i < playersVetor.length; i++){
         player = playersVetor[i];

         // pre set of players playerColor
         //TODO let this be in-game customizable
         if(i == 0) {
             playerColor = "green";
         } else if (i == 1) {
             playerColor = "blue";
         } else if (i == 2) {
             playerColor = "red";
         }

         // goes to trhought all the board uncheking the player
         for(let j = 0; j < casaVetor.length; j++){
             tokenNameID = String(i+1) + "bol" + String(j);
             document.getElementById(tokenNameID).style.backgroundColor=playerColor;
             console.log(tokenNameID);
         }
     }
}

function gameStart(){
    createPlayer("Ronaldo");
    createPlayer("Geraldinho");
    createPlayer("Jamires");

    playerAtual = playersVetor[0];

    inicializeCasas();
    updateScreenInfo();
    printNumber("?");
    printNumber2("?");
    setPlayerColors();
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
        allowBuy = false;
        printNumber("?");
        printNumber2("?");
        alteredPosition = false;
        rolledDice = false;
        playerAtual = playersVetor[turnNumber%(playersVetor.length)];
        validSelectedProperty = false;
        updateScreenInfo();
    } else{
        alert("Tente jogar os dados antes!");
    }

}

function updatesPlayerToken(){
    let player;
    let tokenNameID;
    let tokenElement;

    //TODO change to mantin LAST POSITION BEFORE REWRITE
    //  there is a better way to do this
     for(let i = 0; i < playersVetor.length; i++){
         player = playersVetor[i];

         // goes to trhought all the board uncheking the player
         for(let j = 0; j < casaVetor.length; j++){
             tokenNameID = String(i+1) + "bol" + String(j);
             document.getElementById(tokenNameID).style.display="none";
             if(player.getPosition() == j) {
                 document.getElementById(tokenNameID).style.display="block";
             }

             //console.log(tokenNameID);
         }
     }
}

function updateScreenInfo(){
    // updates players name and money
    document.getElementById('position_show').innerHTML = playerAtual.getName()+"(" + playerAtual.getPosition() + ")";
    document.getElementById('money_show').innerHTML = playerAtual.getMoney();

    updatesPlayerToken();

    // updates de properties list
    //TODO TEST THIS!!
    var propertyListNode = document.getElementById("telas da opcs");

    // remove last player's propertis from the list
    while (propertyListNode.firstChild) {
        propertyListNode.removeChild(propertyListNode.firstChild);
    }

    // prints the new list
    let node;
    let textnode;

    if((playerAtual.belongings).length == 0) {
        node = document.createElement("option");
        textnode = document.createTextNode("sem propriedades!");
        node.appendChild(textnode);
        document.getElementById("telas da opcs").appendChild(node);
    }

    else{
        // goes through all players belongings
        for(let i = 0; i < (playerAtual.belongings).length; i++){
            node = document.createElement("option");
            textnode = document.createTextNode((playerAtual.belongings[i]).nome);
            node.appendChild(textnode);
            document.getElementById("telas da opcs").appendChild(node);
        }
    }
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

        allowBuy = true;
    }else{
        alert("Não é tua vez! Ta querendo roubar?!");

    }
    updateScreenInfo();
}

function movePlayer(distance){
    let newPosition = playerAtual.getPosition() + distance;

    //  loops the board
    newPosition = newPosition % casaVetor.length;

    if(playerAtual.isInPrision() == false) {
        playerAtual.setPosition(newPosition);
        let casaAtual = casaVetor[playerAtual.getPosition()];

        // updates to show the player's new position
        updateScreenInfo();

        // handles the events that happens at the new position
        if(casaAtual instanceof Propriedade) {
            // check if property not for sale
            if(casaAtual.owner != "bank" &&
            casaAtual.owner != playerAtual.getName()) {
                console.log("landed on owned by others property");
                let valorPag = casaAtual.calculaAluguel(diceOne+diceTwo);
                let pay = mandatoryPay(valorPag);

                // the money must be transfered to the receiver
                if (pay == true) {
                    let receiverIndex = getPlayerIndexByName(casaAtual.owner);
                    playersVetor[receiverIndex].reciveMoney(valorPag);
                    alert("Pagou " + valorPag + " por dar role!");
                }
            }
        } else if (casaAtual instanceof Evento) {
            //Tcalls the action of the event
            casaAtual.acaoDoEvento(playerAtual);
        }
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

// makes a player do a mandatory pay. it he has no money, he loses
function mandatoryPay(value){
    console.log("mandatoryPay of value: " + value);
    if(playerAtual.pay(value) == true){
        console.log("sucessful mandatoryPay");
        return true;
    }

    // player can sell properties to stay in gameS
    // or player is removed
    else {
        //TODO implement this feature
        return false;
    }
}

// trys to buy the property this player is landing on
function buyProperty(){
    let casaAtual = casaVetor[playerAtual.getPosition()];
    if(casaAtual instanceof Propriedade){
        if(casaAtual.owner == "bank") {
            if(allowBuy == true) {
                if(playerAtual.pay(casaAtual.valorCompra) == true){
                    casaAtual.owner = playerAtual.getName();
                    playerAtual.addProperty(casaAtual);
                    alert("Comprou!");
                }

                else {
                    alert("Faltou dinheiro");
                }
            }

            else {
                alert("Tem que rodar antes de tentar comprar!");
            }
        }

        else{
            alert("Esta propriedade já possui dono");
        }
    }

    else {
        alert("Casa atual não é uma propeidade");
    }

}

function updateSelectedProperty(){
    // this assumes that the player can only select
    // his own properties

    let selectedName = "_none";
    let propertyListNode = document.getElementById("telas da opcs");
    let selectedValue = propertyListNode.value;
    let listSize = propertyListNode.childElementCount;

    console.log(selectedValue);

    if(selectedValue == "" || selectedValue == "sem propriedades!"){
        validSelectedProperty = false;
        alert("Não pode fazer ação sem selecionar propriedade válida!");
    }

    // if is a property is actually selected, find and update it
    else {
        for(let i = 0; i < playerAtual.belongings.length; i++){
            if(playerAtual.belongings[i].nome == selectedValue){
                // updates de global reference to the selected property
                selectedProperty = playerAtual.belongings[i];

                // this flag shows that the property was selected in this turn
                validSelectedProperty = true;

            } else {
                console.log("ERRO: propriedade não encontrada na lista.");
            }
        }

    }

    //TODO remove if uncesseary - check it
    // let auxName;
    // for(let i = 0; i < listSize; i++){
    //     auxName = propertyListNode.childNodes[i].firstChild.nodeValue;
    //     console.log("got name>" + auxName + "<"+propertyListNode.value);
    //
    // }

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
let allowBuy = false;
const startingMoney = 3500;
let diceOne = 0;
let diceTwo = 0;
let validSelectedProperty = false;
let selectedProperty;

// starts the game
gameStart();
