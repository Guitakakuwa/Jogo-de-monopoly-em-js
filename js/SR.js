let rN_amount
function SR () {
let rN_choice = Math.floor(Math.random() *100 );



    if (rN_choice === 0 || rN_choice === 1) {
    	sendToPrison();
        document.getElementById("game-log").innerHTML = "Sorte/Revés: você foi preso por invadir propriedade privada para usar o banheiro.";
        updateScreenInfo();

    } else if (rN_choice % 2 === 0){
         rN_amount = (Math.floor(Math.random() *10 ) +1)*10;
         document.getElementById("game-log").innerHTML = "Sorte/Revés: você se ferrou, pagou  " + rN_amount;
         mandatoryPay(rN_amount);


    }else {
    	rN_amount = (Math.floor(Math.random() *10 ) +1)*10;
        playerAtual.reciveMoney(rN_amount);
        document.getElementById("game-log").innerHTML = "Sorte/Revés: voce se deu bem, recebeu " + rN_amount;
    }

}


function lucrosDividendos(){
	playerAtual.reciveMoney(200);
    document.getElementById("game-log").innerHTML = "Você caiu em Lucros e Dividendos, recebeu 200";
}

function impostoDeRenda(){
    document.getElementById("game-log").innerHTML = "Você caiu em Imposto de Renda, pagou 200";
	playerAtual.pay(200);
}
function sendToPrison() {
    document.getElementById("game-log").innerHTML = "Você foi mandado para a prisão!";
    playerAtual.prisionTime = 2;
    playerAtual.inPrision = true;
    playerAtual.position = 10;
}
