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
    return this.cards

  }

  // shuffle deck
  shuffleDeck(cards) {
    for (let i = cards.length-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = cards[i]
        cards[i] = cards[j]
        cards[j] = temp
    }

    return this.cards
  }

}

//create player class with deck, points, winner
class Player {
  constructor(cards) {
    this.cards = cards;
    this.points = 0
  }
}


function play(){
    let deck = new Deck()
    let shuffledDeck = deck.shuffleDeck(deck.createNewDeck())
    
    // create players
    let player1 = new Player(shuffledDeck.slice(0,26))
    let player2 = new Player(shuffledDeck.slice(26,52))

    for (let i = 0; i < player1.cards.length; i++) {
        console.log(player1.cards[i], player2.cards[i])
        if (player1.cards[i].value > player2.cards[i].value) {
            console.log('player1 wins')
            player1.points++
        } else if (player1.cards[i].value < player2.cards[i].value) {
            console.log('player2 wins')
            player2.points++
        }
    }

    if (player1.points > player2.points) {
        console.log('Player 1 has won!') 
    } else if (player1.points < player2.points) {
        console.log('Player 2 has won!')
    } else {
        console.log(`It's a tie!`)
    }

    console.log(player1, player2)
}

play()