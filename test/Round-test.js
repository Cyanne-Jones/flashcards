const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe ('Round', () => {
    it('Should be a function', () => {
        const round = new Round();
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', () => {
        const round = new Round();
        expect(round).to.be.an.instanceof(Round);
      }); 
    
    it('Should store a deck of cards', () => {
        const card1 = new Card(1, 'When was Colorado given its statehood?', [1876, 1976, 1865], 1876);
        const card2 = new Card(2, 'Who was Colorado\'s first Governor (as a state, not a territory)?', ['John Evans', 'John Long Routt', 'William Gilpin'], 'John Long Routt');
        const card3 = new Card(3, 'What is Colorado\'s highest peak?', ['Pike\'s Peak', 'Mount Evans', 'Mount Elbert'], 'Mount Elbert');

        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);

        expect(round.deck).to.equal(deck);
    });
});