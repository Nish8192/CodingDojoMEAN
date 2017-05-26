function Player(name){
    this.card1 = "";
    this.card2 = "";
    this.name = name;
}

function DeckOfCards(){
    var self = this;
    this.deck = [];
    this.createDeck = function(){
        this.deck = [];
        for(let i = 1; i <= 13; i++){
            if(i == 1){
                this.deck.push("Ace of Spades");
            }
            if(i == 11){
                this.deck.push("Jack of Spades");
            }
            if(i == 12){
                this.deck.push("Queen of Spades");
            }
            if(i == 13){
                this.deck.push("King of Spades");
            }
            else{
                this.deck.push(i + " of Spades");
            }
        }
        for(let i = 1; i <= 13; i++){
            if(i == 1){
                this.deck.push("Ace of Clubs");
            }
            if(i == 11){
                this.deck.push("Jack of Clubs");
            }
            if(i == 12){
                this.deck.push("Queen of Clubs");
            }
            if(i == 13){
                this.deck.push("King of Clubs");
            }
            else{
                this.deck.push(i + " of Clubs");
            }
        }
        for(let i = 1; i <= 13; i++){
            if(i == 1){
                this.deck.push("Ace of Diamonds");
            }
            if(i == 11){
                this.deck.push("Jack of Diamonds");
            }
            if(i == 12){
                this.deck.push("Queen of Diamonds");
            }
            if(i == 13){
                this.deck.push("King of Diamonds");
            }
            else{
                this.deck.push(i + " of Diamonds");
            }
        }
        for(let i = 1; i <= 13; i++){
            if(i = 1){
                this.deck.push("Ace of Hearts");
            }
            if(i = 11){
                this.deck.push("Jack of Hearts");
            }
            if(i = 12){
                this.deck.push("Queen of Hearts");
            }
            if(i = 13){
                this.deck.push("King of Hearts");
            }
            else{
                this.deck.push(i + " of Hearts");
            }
        }
    }

    this.shuffle = function(){
        var j, x, i;
        for (i = this.deck.length; i > 0; i--) {
            j = Math.floor(Math.random() * i);
              x = this.deck[i - 1];
              this.deck[i - 1] = this.deck[j];
              this.deck[j] = x;
          }
    }

    this.deal = function(person){
        if(this.deck.length <= 0){
            this.createDeck();
            this.shuffle();
        }
        person.card1 = this.deck.pop();
        person.card2 = this.deck.pop();
        return this;
    }
}

var aDeck = new DeckOfCards();
aDeck.createDeck();
console.log(aDeck.deck)
aDeck.shuffle();
console.log(aDeck.deck);
console.log(aDeck.deck.length);

var me = new Player("Nishant");
var you = new Player("Jake");
aDeck.deal(me);
console.log(me.card1 + " " + me.card2);
aDeck.deal(me);
console.log(me.card1 + " " + me.card2);

aDeck.deal(me);
console.log(me.card1 + " " + me.card2);
console.log(you.card1 + " " + you.card2);

aDeck.deal(me);
console.log(me.card1 + " " + me.card2);
console.log(you.card1 + " " + you.card2);

aDeck.deal(me);
console.log(me.card1 + " " + me.card2);
console.log(aDeck.deck.length);

aDeck.deal(you);
console.log(you.card1 + " " + you.card2);
