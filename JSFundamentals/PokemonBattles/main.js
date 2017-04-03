// Pokemon = $.ajax("http://pokeapi.co/api/v1/pokemon")

var game = {
    players : [],
    addPlayer : function(player){
        players.push(player);
    }
}

function playerConstructor(name){
    player = {};
    player.name = name;
    player.hand = [];
    player.addCard = function(card){
        player.hand.push(card);
    };
    return player;
};

function getPokemon(){

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      var h1 = [], h2 = [];
      for(let i = 0; i < 5; i++){
          h1.push(Math.getRandomIntInclusive(1, 151));
          h2.push(Math.getRandomIntInclusive(1, 151));
      }
      for(let i = 0; i < h1.length; i++){
          var generateURL = "http://pokeapi.co/media/img/${h1[i]}.png"
          $.ajax({
              type: "GET",
              url: generateURL,
              dataType: 'json',
              async:true,
              success: function(data){
                  document.getElementById("hand1").append(
                      `<p>HELLO</p>`
                  )
              }
          })
      }
      for(let i = 0; i < h2.length; i++){
          var generateURL2 = "http://pokeapi.co/media/img/${h2[i]}.png"
          $.ajax({
              type: "GET",
              url: generateURL2,
              dataType: 'json',
              async:true,
              success: function(data){
                  document.getElementById("hand2").append(
                      `<img class='pokemon_entry' id='${h2[i]}' src="${data}" alt="" width="100">`
                  )
              }
          })
      }
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("hand1").innerHTML = this.responseText;
     document.getElementById("hand2").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "http://pokeapi.co/api/v1/pokemon/", true);
  xhttp.send();
}
}
