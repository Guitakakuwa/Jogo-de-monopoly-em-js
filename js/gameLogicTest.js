// console.log("gameLogicTest started!");
//
// jog = new Player("Ronaldo");
//
// jog.addProperty("brás");
// jog.addProperty("bexiga");
// jog.addProperty("Barra funda");
// // console.log(jog.belongings[0]);
//
// let lista = jog.getProperty();
//
// // console.log(lista[0]);
//
// for(let i = 0; i < lista.length; i++) {
//     console.log(lista[i]);
// }

function logPlayers(){
    let j = 0;
    let auxList;
    for(let i = 0; i < playersVetor.length; i++) {
        console.log("Name: " + playersVetor[i].getName());
        console.log("ID: " + playersVetor[i].getID());
        console.log("Money: " + playersVetor[i].getMoney());
        console.log("Position: " + playersVetor[i].getPosition());
        console.log("InPrision: (" + playersVetor[i].getJailTime() + "): " + playersVetor[i].isInPrision());

        //  prints all properties of the player
        auxList = playersVetor[i].getProperty();
        for(j = 0; j < auxList.length; j++){
            console.log("  >" + auxList[j].nome);
        }

        console.log(" ");
        console.log(" ");
    }
}



//logPlayers();
