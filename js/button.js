
document.getElementById("button_buy").addEventListener("click", function(){
    buyProperty();
    updateScreenInfo();
});

//esperar ate sell estar pronto
/*document.getElementById("button_sell").addEventListener("click", function(){
     sellProperty();
});*/

document.getElementById("button_turn").addEventListener("click", function(){
      passTurn();
      updateScreenInfo();
});


 function PlaySound(melody) {
        var path = "audio/";
        var snd = new Audio(path + "Uno_grito" + ".mp3");
        snd.play();
    }
