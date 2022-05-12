const Turn = require('./Turn');

class Round {
    constructor(deck) {
        this.deckObj = deck;
        this.deck = deck.cards;
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.deck[this.turns];
    };

    takeTurn(guess) {
        const turn = new Turn(guess, this.returnCurrentCard());
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push([this.returnCurrentCard()][0].id);
        };
        this.turns ++;
        return turn.giveFeedback();
    };
    
    calculatePercentageCorrect() {
      return 100 - Math.round(100*(this.incorrectGuesses.length/this.deckObj.countCards()));
    };

    endRound() {
       console.log(`** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`);
    };
};

module.exports = Round;