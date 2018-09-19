import React, { Component } from 'react';
import { Card } from '../components/Card';
import { shuffleArray } from '../helpers/shuffleArray'

class App extends Component {

  state = {
    ranks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    suits: ['club', 'diamond', 'heart', 'spade'],
    deck: [],
    dealtCard: null,
    amountOfCardsRemaining: 52,
    shuffled: false,
  };

  componentWillMount() {    
    this.initDeck();
  }


  initDeck = () => {
    const { ranks, suits } = this.state;
    let deckUnshuffled = [];
    suits.forEach((suit) => {
      let i = 0;
      deckUnshuffled = deckUnshuffled.concat(Array(13).fill().map(() => ({
        rank: ranks[i++],
        suit
      })));
    });
    this.setState({
      deck: deckUnshuffled
    });
  }

  shuffleDeck = () => {
    const { deck } = this.state;
    const deckShuffled = shuffleArray(deck);
    this.setDeck(deckShuffled);
    this.setShuffled();
  }

  removeCardFromDeck = (index) => {
    const { deck } = this.state;
    deck.splice(index, 1);
    this.setDeck(deck);
  }

  setDeck = (deck) => {
    this.setState({
      deck
    });
  }

  setShuffled = () => {
    this.setState({
      shuffled: true
    });
  }

  setDealtCard = (index) => {
    const { deck } = this.state;
    this.setState({
      dealtCard: deck[index]
    });
  }

  setAmountOfCardsRemaining = () => {
    const { deck } = this.state;
    this.setState({
      amountOfCardsRemaining: deck.length
    });
  }

  dealOneCard = () => {
    const topCardIndex = 0;
    this.setDealtCard(topCardIndex);
    this.removeCardFromDeck(topCardIndex);
    this.setAmountOfCardsRemaining();
  }

  render() {
    const { dealtCard, amountOfCardsRemaining, shuffled } = this.state;

    return (
      <div className="has-text-centered">
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Card Picker
              </h1>
              <h2 className="subtitle">
                Pick a card, any card.
              </h2>
            </div>
          </div>
        </section>
        <section className='section'>
          {dealtCard ?
            <Card 
              rank={dealtCard.rank}
              suit={dealtCard.suit}
            />
          : null}
        </section>

        {!dealtCard && shuffled ?
          <div className="container notification is-success">
            Cards shuffled! Try dealing one card.
          </div>
        : null}

        <section className='section'>
          <button
            className='button is-primary is-medium'
            style={{
              marginRight: '1rem'
            }}
            disabled={shuffled}
            onClick={this.shuffleDeck}
          >
            Shuffle Deck
          </button>

          <button
            className='button is-primary is-medium'
            style={{
              marginRight: '1rem'
            }}
            disabled={!shuffled}
            onClick={this.dealOneCard}
          >
            Deal One Card
          </button>
        </section>

        <section className='section'>
          <h6 className='subtitle'>
            {amountOfCardsRemaining === 0 ? 'No more cards remaining.' : `Cards remaining: ${amountOfCardsRemaining}`}
          </h6>
        </section>
      </div>
    );
  }
}

export default App;
