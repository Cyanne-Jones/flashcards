const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
    let card1;
    let card2;
    let card3;
    let deck;

    beforeEach(() => {
        card1 = new Card(1, 'When was Colorado given its statehood?', [1876, 1976, 1865], 1876);
        card2 = new Card(2, 'Who was Colorado\'s first Governor (as a state, not a territory)?', ['John Evans', 'John Long Routt', 'William Gilpin'], 'John Long Routt');
        card3 = new Card(3, 'What is Colorado\'s highest peak?', ['Pike\'s Peak', 'Mount Evans', 'Mount Elbert'], 'Mount Elbert');
        deck = new Deck([card1, card2, card3]);
    });

    it('Should be a function', () => {
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of deck', () => {
        expect(deck).to.be.an.instanceof(Deck);
    }); 
    
    it('Should be initialized with and store an array of Card objects', () => {
        expect(deck.cards.every(card => card instanceof Card)).to.equal(true);
    });
    
      it('Should be able to count how many cards are in the deck', () => {
        expect(deck.countCards()).to.equal(3);
    });
});