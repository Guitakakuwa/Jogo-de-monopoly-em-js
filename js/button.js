document.getElementById("button_buy").addEventListener("click", function(){
    buyProperty();
    updateScreenInfo();
});

document.getElementById("button_sell").addEventListener("click", function(){
     sellProperty();
});

document.getElementById("button_turn").addEventListener("click", function(){
      passTurn();
      updateScreenInfo();
});

document.getElementById("button_add").addEventListener("click", function(){
     addHouse();
});
