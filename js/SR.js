
function SR () {
let rN_choice = Math.floor(Math.random() *2 ) +0;

if (rN_choice===0) {
	return	playerAtual.sentToPrison();

}else if (rN_choice===1){
	let rN_amount = (Math.floor(Math.random() *10 ) +1)*10;
return playerAtual.mandatoryPay(rN_amount);
}else if (rN_choice===2)
	let rN_amount = (Math.floor(Math.random() *10 ) +1)*10;	
return (playerAtual.reciveMoney(rN_amount);	
}


function lucrosDividendos(){
	return playerAtual.reciveMoney(200);
}

function impostoDeRenda(){
	return (playerAtual.reciveMoney(200);	 
}