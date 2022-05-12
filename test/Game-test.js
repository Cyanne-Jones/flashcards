const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Game = require('../src/Game');

describe ('Game', () => {
    
    let game;

    beforeEach(() => {
        game = new Game();
    });

    it('Should keep track of the current round', () => {
        expect(game.currentRound).to.equal(undefined);
        game.start();
        expect(game.currentRound).to.be.an.instanceof(Round);
    });

    it('Should have a start function', () => {
        expect(game.start).to.be.a('function');
    });
});