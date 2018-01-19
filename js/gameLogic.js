// player class
function Player (name, id) {
    this.name = name;
    this.money = 0;
    this.inPrision = false;
    this.prisionTime = 0;
    this.position = 0;
    this.playerID = id;
    this.belongings = [];
    this.inGame = true;

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
             // console.log(tokenNameID);
         }
     }
}

function gameStart(){
    createPlayer("Ronaldo");
    createPlayer("Geraldo");
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
    let casa = [];

    casa[0] = new CasaTabuleiro (0, "Partida");
    casa[1] = new Terreno (1, 100, "Leblon", 50, 6, 50, 50);
    casa[2] = new Evento (2, "Sorte/Revés");
    casa[3] = new Terreno (3, 60, "Avenida Presidente Vargas", 50, 2, 30, 30);
    casa[4] = new Terreno (4, 60, "Avenida Nossa Senhora de Copacabana", 50, 4, 40, 30);
    casa[5] = new Companhia (5, 200, "Companhia Ferroviária", 50, 100);
    casa[6] = new Terreno (6, 240, "Avenida Brigadeiro Faria Lima", 150, 20, 80, 120);
    casa[7] = new Companhia (7, 200, "Companhia de Viação", 50, 100);
    casa[8] = new Terreno (8, 220, "Avenida Rebouças", 150, 18, 70, 110);
    casa[9] = new Terreno (9, 220,"Avenida 9 de Julho", 150, 20, 70, 120);
    casa[10] = new CasaTabuleiro (10, "Prisão");
    casa[11] = new Terreno (11, 200, "Avenida Europa", 100, 16, 60, 100);
    casa[12] = new Evento (12, "Sorte/Revés");
    casa[13] = new Terreno (13, 180, "Rua Augusta", 100, 14, 50, 90);
    casa[14] = new Terreno (14, 180, "Avenida Pacaembu", 100, 14, 55, 90);
    casa[15] = new Companhia (15, 150, "Companhia de Táxi", 40, 75);
    casa[16] = new Evento (16, "Sorte/Revés");
    casa[17] = new Terreno (17, 350, "Interlagos", 200, 35, 140, 175);
    casa[18] = new Evento (18, "Lucros e Dividendos");
    casa[19] = new Terreno (19, 400, "Morumbi", 200, 50, 150, 200);
    casa[20] = new CasaTabuleiro (20, "Parada Livre");
    casa[21] = new Terreno (21, 120, "Flamengo", 50, 8, 30, 50);
    casa[22] = new Evento (22, "Sorte/Revés");
    casa[23] = new Terreno (23, 100, "Botafogo", 50, 6, 25, 50);
    casa[24] = new Evento (24, "Imposto de Renda");
    casa[25] = new Companhia (25, 150, "Companhia de Navegação", 40, 75);
    casa[26] = new Terreno (26, 160, "Avenida Brasil", 100, 12, 50, 60);
    casa[27] = new Evento (27, "Sorte/Revés");
    casa[28] = new Terreno (28, 140, "Avenida Paulista", 100, 10, 40, 70);
    casa[29] = new Terreno (29, 140, "Jardim Europa", 100, 10, 40, 70);
    casa[30] = new Evento(30, "Sorte/Revés");
    casa[31] = new Terreno (31, 260, "Copacabana", 150, 22, 80, 130);
    casa[32] = new Companhia (32, 200, "Companhia de Aviação", 50, 100);
    casa[33] = new Terreno (33, 320, "Avenida Viera Souto", 200, 28, 120, 160);
    casa[34] = new Terreno (34, 300, "Avenida Atlântica", 200, 26, 120, 160);
    casa[35] = new Companhia (35, 200, "Companhia de Táxi Aéreo", 50, 100);
    casa[36] = new Terreno (35, 300, "Ipanema", 200, 24, 120, 180);
    casa[37] = new Evento (37, "Sorte/Revés");
    casa[38] = new Terreno (38, 280, "Jardim Paulista", 150, 24, 100, 140);
    casa[39] = new Terreno (39, 260, "Brooklin", 150, 22, 90, 130);

    for(let i = 0; i < 40; i++) {
        casaVetor.push(casa[i]);
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
        document.getElementById("game-log").innerHTML = "Jogue os dados!"
    } else{
        // alert("Tente jogar os dados antes!");
        document.getElementById("game-log").innerHTML = "Jogue os dados antes."
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
    document.getElementById('position_show').innerHTML = playerAtual.getName();
    document.getElementById('money_show').innerHTML = playerAtual.getMoney();

    updatesPlayerToken();

    // updates de properties list
    //TODO TEST THIS!!
    var propertyListNode = document.getElementById("telas_da_opcs");

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
        document.getElementById("telas_da_opcs").appendChild(node);
    }

    else{
        // goes through all players belongings
        for(let i = 0; i < (playerAtual.belongings).length; i++){
            node = document.createElement("option");
            textnode = document.createTextNode((playerAtual.belongings[i]).nome);
            node.appendChild(textnode);
            document.getElementById("telas_da_opcs").appendChild(node);
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
        // alert("Não é tua vez! Ta querendo roubar?!");
        document.getElementById("game-log").innerHTML = "Você ja jagou nessa rodada!"

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
        document.getElementById("game-log").innerHTML = "Você caiu em " + casaAtual.nome + "!";


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
                    // alert("Pagou " + valorPag + " por dar role!");
                    document.getElementById("game-log").innerHTML = "Pagou " + valorPag + " por ser troxa xD"
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
        //TODO TESTE THIS
        let playerNetValue = playerAtual.getMoney();

        // adds the player land value
        for(let i = 0; i < playerAtual.belongings.length; i++){
            playerNetValue += (playerAtual.belongings[i].valorCompra)/2;
        }

        // if the player can pay saying, let him or her
        if(playerNetValue < value) {
            //  TODO IMPLEMENT PLAYER LOSS
            //  sells everything and remove player

        } else {
            // ALLOW PLAYER TO SELL WHAT HE WANTS

        }

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
                    // alert("Comprou!");
                    document.getElementById("game-log").innerHTML = "Voce comprou " + casaAtual.nome + "!";
                }

                else {
                    // alert("Faltou dinheiro");
                    document.getElementById("game-log").innerHTML = "Voce não tem dinheiro suficiente!"
                }
            }

            else {
                // alert("Tem que rodar antes de tentar comprar!");
                document.getElementById("game-log").innerHTML = "Jogue o dado antes de tentar comprar!"
            }
        }

        else{
            document.getElementById("game-log").innerHTML ="Esta propriedade já possui dono!"
        }
    }

    else {
        // alert("Casa atual não é uma propeidade");
        document.getElementById("game-log").innerHTML = "Casa atual não é um propriedade!"
    }

}

function updateSelectedProperty(){
    // this assumes that the player can only select
    // his own properties

    let selectedName = "_none";
    let propertyListNode = document.getElementById("telas_da_ opcs");
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
