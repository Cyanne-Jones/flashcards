const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Deck', () => {
    it('Should be a function', () => {
        const deck = new Deck();
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of deck', () => {
        const deck = new Deck();
        expect(deck).to.be.an.instanceof(Deck);
      }); 
    
      it('Should be initialized with and store an array of Card objects', () => {
        const card1 = new Card(1, 'When was Colorado given its statehood?', [1876, 1976, 1865], 1876);
        const card2 = new Card(2, 'Who was Colorado\'s first Governor (as a state, not a territory)?', ['John Evans', 'John Long Routt', 'William Gilpin'], 'John Long Routt');
        const card3 = new Card(3, 'What is Colorado\'s highest peak?', ['Pike\'s Peak', 'Mount Evans', 'Mount Elbert'], 'Mount Elbert');

        const deck = new Deck([card1, card2, card3]);
        
        expect(deck.cards.every(card => card instanceof Card)).to.equal(true);
      });
});