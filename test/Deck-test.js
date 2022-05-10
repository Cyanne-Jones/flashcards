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
});