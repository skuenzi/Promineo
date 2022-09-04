const player1Card = document.getElementsByClassName("player-1-card")[0];
const player2Card = document.getElementsByClassName("player-2-card")[0];
const player1Score = document.getElementsByClassName("player-1-Score")[0];
const player2Score = document.getElementsByClassName("player-2-Score")[0];

// create card class with suite/value

class Card {
  constructor(suite, value) {
    this.suite = suite;
    this.value = value;
  }
}

// create deck class with card array
class Deck {
  constructor() {
    this.cards = [];
  }

  // create a new deck
  createNewDeck() {
    for(let i = 0; i < 13; i++) {
        this.cards.push(new Card('hearts', i + 1))
        this.cards.push(new Card('spades', i + 1))
        this.cards.push(new Card('diamonds', i + 1))
        this.cards.push(new Card('clubs', i + 1))
    }

  }

  // shuffle deck
  shuffleDeck(cards) {
    for (let i = cards.length-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = cards[i]
        cards[i] = cards[j]
        cards[j] = temp

    }
  }

  // deal cards to each player
  dealCards() {
    let player1 = new Player(this.cards.splice(0,26))
    let player2 = new Player(this.cards.splice(0,26))

    console.log(player1,player2)
  }


}

//create player class with deck, points, winner
class Player {
  constructor(cards) {
    this.cards = cards;
  }
}


// create function to play game


function play() {

    // create and shuffle new deck
    let deck = new Deck()
    deck.createNewDeck()
    deck.shuffleDeck(deck.cards)
    deck.dealCards()

}

play()