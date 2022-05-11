const Turn = require('./Turn');
const Deck = require('./Deck');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
    }
    returnCurrentCard() {
        return this.deck[0];
    };

    takeTurn(guess) {
        this.turns ++;
        const turn = new Turn(guess, this.returnCurrentCard());
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.returnCurrentCard().id);
        };
        this.deck.push(this.deck.shift());
        return turn.giveFeedback();
    };
};

module.exports = Round;