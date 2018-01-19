let rN_amount
function SR () {
let rN_choice = Math.floor(Math.random() *100 ) +0;



    if (rN_choice===0 || rN_choice === 1) {
    	sendToPrison();
        updateScreenInfo();

    } else if (rN_choice%2 === 0){
    	 rN_amount = (Math.floor(Math.random() *10 ) +1)*10;
         mandatoryPay(rN_amount);
    }else {
    	rN_amount = (Math.floor(Math.random() *10 ) +1)*10;
        playerAtual.reciveMoney(rN_amount);
    }

}


function lucrosDividendos(){
	playerAtual.reciveMoney(200);
}

function impostoDeRenda(){
	playerAtual.reciveMoney(200);
}
function sendToPrison() {
    playerAtual.prisionTime = 2;
    playerAtual.inPrision = true;
    playerAtual.position = 10;
}
