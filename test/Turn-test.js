const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
    let card;
    let turn;

    beforeEach(() => {
        card = new Card (1, 'Who was the drummer for Pink Floyd?', ['Roger Waters', 'David Gilmour', 'Richard Wright', 'Nick Mason'], 'Nick Mason');
        turn = new Turn('Nick Mason', card);
    });

    it('Should be a function', () => {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
        expect(turn).to.be.an.instanceof(Turn);
    }); 

    it('Should store a user\'s guess', () => {
        expect(turn.guess).to.equal('Nick Mason');
    });

    it('Should store a card for the current card in play', () => {
        expect(turn.guess).to.equal('Nick Mason');
    });

    it('Should be able to return the user\'s guess', () => {
        expect(turn.returnGuess()).to.equal('Nick Mason');
    });
    it('Should be able to return the current card in play', () => {
        expect(turn.returnCard()).to.equal(card);
    });

    it('Should be able to evaluate the user\'s guess', () => {
        const turn2 = new Turn ('Roger Waters', card)

        expect(turn.evaluateGuess()).to.equal(true)
        expect(turn2.evaluateGuess()).to.equal(false);
    });

    it('Should give feedback based on the user\'s answer', () => {
        const turn2 = new Turn('Richard Wright', card)

        expect(turn.giveFeedback()).to.equal('correct!')
        expect(turn2.giveFeedback()).to.equal('incorrect!');
    });
});