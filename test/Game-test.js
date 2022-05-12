const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');

describe ('Game', () => {
    
    let game;

    beforeEach(() => {
        game = new Game();
    });

    it.skip('Should keep track of the current round', () => {
        expect(game.currentRound).to.equal(undefined);
        game.start();
        expect(game.currentRound).to.be.an.instanceof(Round);
    });

    it('Should have a start function', () => {
        expect(game.start).to.be.a('function');
    });
});