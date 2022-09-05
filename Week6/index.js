const player1Card = document.querySelector(".player-1-card");
const player2Card = document.querySelector(".player-2-card");
const player1Score = document.querySelector(".player-1-score");
const player2Score = document.querySelector(".player-2-score");
const nextTurnBtn = document.querySelector(".next-turn-btn");
const winner = document.querySelector(".winner");

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
      this.cards.push(new Card("Hearts", i + 1));
      this.cards.push(new Card("Spades", i + 1));
      this.cards.push(new Card("Diamonds", i + 1));
      this.cards.push(new Card("Clubs", i + 1));
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

    // 
  let i = 0;
  nextTurnBtn.addEventListener("click", () => {
    if (i >= 26) {
      if (player1.points > player2.points) {
        winner.innerHTML = "Player 1 has won!";
      } else if (player1.points < player2.points) {
        winner.innerHTML = "Player 2 has won!";
      } else {
        winner.innerHTML = `It's a tie!`;
      }
      nextTurnBtn.disabled = true;
    }

    player1Card.innerHTML = `${player1.cards[i].value} of ${player1.cards[i].suite} `;
    player2Card.innerHTML = `${player2.cards[i].value} of ${player2.cards[i].suite} `;

    if (player1.cards[i].value > player2.cards[i].value) {
      player1.points++;
    } else if (player1.cards[i].value < player2.cards[i].value) {
      player2.points++;
    }
    // console.log(player1.cards[i], player2.cards[i])
    i++;
    player1Score.innerHTML = player1.points;
    player2Score.innerHTML = player2.points;
  });
}

play();
