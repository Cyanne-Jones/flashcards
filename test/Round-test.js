const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe ('Round', () => {

    let card1;
    let card2;
    let card3;
    let deck;
    let round;

    it('Should be a function', () => {
        const round = new Round();
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', () => {
        const round = new Round();
        expect(round).to.be.an.instanceof(Round);
      }); 

    beforeEach(() => {
        card1 = new Card(1, 'When was Colorado given its statehood?', [1876, 1976, 1865], 1876);
        card2 = new Card(2, 'Who was Colorado\'s first Governor (as a state, not a territory)?', ['John Evans', 'John Long Routt', 'William Gilpin'], 'John Long Routt');
        card3 = new Card(3, 'What is Colorado\'s highest peak?', ['Pike\'s Peak', 'Mount Evans', 'Mount Elbert'], 'Mount Elbert');

        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    });
    
    it('Should store a deck of cards', () => {
        expect(round.deck).to.equal(deck);
    });

    it('Should have a turn property that begins at 0', () => {
        expect(round.turns).to.equal(0);
    });

    it('Should have an incorectGuesses array that is empty by default', () => {
        expect(round.incorrectGuesses).to.deep.equal([]);
    });

    it('Should have a method returnCurrentCard that returns the current card object', () => {
        expect(round.returnCurrentCard()).to.equal(round.deck[0]);
    });
});