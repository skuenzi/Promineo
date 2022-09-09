let expect = chai.expect

describe('MyFunctions', () => {
    describe('Deck Constructor', () => {
        before(() => {
            this.deck = new Deck()
        })
        after(() => {
            delete this.deck
        })
        it('should create 52 cards', () => {
            let deckLength = deck.createNewDeck().length
            expect(deckLength).to.equal(52)
        })
    })
})