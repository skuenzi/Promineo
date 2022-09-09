

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
    for (let i = 0; i < 13; i++) {
      this.cards.push(new Card("♥", i + 1));
      this.cards.push(new Card("♠", i + 1));
      this.cards.push(new Card("♦", i + 1));
      this.cards.push(new Card("♣", i + 1));
    }
    return this.cards;
  }

  // shuffle deck
  shuffleDeck(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }

    return this.cards;
  }
}

//create player class with deck, points, winner
class Player {
  constructor(cards) {
    this.cards = cards;
    this.points = 0;
  }
}


function play() {
  let deck = new Deck();
  let shuffledDeck = deck.shuffleDeck(deck.createNewDeck());

  // create players
  let player1 = new Player(shuffledDeck.slice(0, 26));
  let player2 = new Player(shuffledDeck.slice(26, 52));


    for (let i = 0; i < 26; i ++) {
      // log round
      console.log(`Round ${i + 1}`)

      // log current cards
      console.log( `Player 1 Card: ${player1.cards[i].value} ${player1.cards[i].suite} `);
      console.log(`Player 2 Card: ${player2.cards[i].value} ${player2.cards[i].suite} `);
      
      // check which player has won current round
      if (player1.cards[i].value > player2.cards[i].value) {
        player1.points++;
        console.log(`Round ${i+1} goes to Player 1`)
      } else if (player1.cards[i].value < player2.cards[i].value) {
        player2.points++;
        console.log(`Round ${i+1} goes to Player 2`)
      }
      
      // log current scores
      console.log('Player 1 Score: ' + player1.points);
      console.log('Player 2 Score: ' + player2.points);
    } 
    
    // after 26 rounds, check which player has won
    if (player1.points > player2.points) {
      console.log("Player 1 has won!");
    } else if (player1.points < player2.points) {
      console.log("Player 2 has won!");
    } else {
      console.log(`It's a tie!`);
    }
    
}

play();
