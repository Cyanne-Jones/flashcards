const Turn = require('./Turn');
const Deck = require('./Deck');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
    }
    returnCurrentCard() {
        return this.deck.cards[0];
    };

    takeTurn(guess) {
        this.turns ++;
        const turn = new Turn(guess, this.returnCurrentCard());
        this.deck.cards.push(this.deck.cards.shift());
        return turn.giveFeedback();
    };
};

module.exports = Round;