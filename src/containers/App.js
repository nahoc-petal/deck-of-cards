import React, { Component } from 'react';
import { Card } from './../components/Card';
import { shuffleArray } from '../helpers/shuffleArray'

class App extends Component {

  state = {
    ranks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    suits: ['club', 'diamond', 'heart', 'spade'],
    deck: [],
    dealtCard: {
      rank: null,
      suit: ''
    },
    amountOfCardsRemaining: 52,
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

  shuffle = () => {
    const { deck } = this.state;
    const deckShuffled = shuffleArray(deck);
    this.setDeck(deckShuffled);
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

  logState = () => {
    console.log(this.state);
  }

  render() {
    const { dealtCard, amountOfCardsRemaining } = this.state;

    return (
      <div className="container has-text-centered">

          {dealtCard ?
            <section className='section'>
              <Card 
                rank={dealtCard.rank}
                suit={dealtCard.suit}
              />
            </section>
          : null}

          <section className='section'>
            <button
              className='button is-primary'
              style={{
                marginRight: '1rem'
              }}
              onClick={this.logState}
            >
              Log state
            </button>
            
            <button
              className='button is-primary is-medium'
              style={{
                marginRight: '1rem'
              }}
              onClick={this.shuffle}
            >
              Reshuffle Deck
            </button>

            <button
              className='button is-primary is-medium'
              style={{
                marginRight: '1rem'
              }}
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
