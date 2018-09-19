import * as React from 'react';
import { shuffleArray } from './../utils/utils';
import { Card, ICard, Suit } from './Card';

interface IAppState {
  amountOfCardsRemaining: number,
  dealtCard: ICard | null,
  deck: ICard[],
  ranks: number[],
  shuffled: boolean,
  suits: Suit[],
}

class App extends React.Component<any, IAppState> {

  constructor(props: any) {
    super(props);
    this.state = { 
      amountOfCardsRemaining: 52,
      dealtCard: null,
      deck: [],
      ranks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      shuffled: false,
      suits: ['club', 'diamond', 'heart', 'spade'],
    };
  }

  public componentWillMount() {    
    this.initDeck();
  }

  public render(): React.ReactNode {
    const { 
      dealtCard,
      amountOfCardsRemaining, 
      shuffled 
    } = this.state;

    return (
      <div className="has-text-centered">
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Card Picker 2018</h1>
              <h2 className="subtitle">Pick a card, any card.</h2>
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
          <section className='section'>
            <div className="container notification is-success">
                <span className="subtitle">Cards shuffled! Try dealing one card.</span>
            </div>
          </section>
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
            {amountOfCardsRemaining === 0 ? 
              'No more cards remaining.' : 
              `Cards remaining: ${amountOfCardsRemaining}`
            }
          </h6>
        </section>
      </div>
    );
  }

  private initDeck = (): void => {
    const deckUnshuffled: ICard[] = this.sortByNewDeckOrder();
    this.setDeck(deckUnshuffled);
  }

  private sortByNewDeckOrder = (): ICard[] => {
    const { ranks, suits } = this.state;
    let deckUnshuffled: ICard[] = [];
    suits.forEach((suit) => {
      let i: number = 0;
      const arr: number[] = new Array(13);
      deckUnshuffled = deckUnshuffled.concat(arr.fill(0).map(() => ({
        rank: ranks[i++],
        suit,
      })));
    });
    return deckUnshuffled;
  }

  private setDeck = (deck: ICard[]): void => {
    this.setState({
      deck
    });
  }

  private shuffleDeck = (): void => {
    const { deck } = this.state;
    const deckShuffled = shuffleArray(deck);
    this.setDeck(deckShuffled);
    this.setShuffledToTrue();
  }

  private setShuffledToTrue = (): void => {
    this.setState({
      shuffled: true
    });
  }

  private removeCardFromDeck = (index: number): void => {
    const { deck } = this.state;
    deck.splice(index, 1);
    this.setDeck(deck);
  }

  private setDealtCard = (index: number): void => {
    const { deck } = this.state;
    this.setState({
      dealtCard: deck[index]
    });
  }

  private setAmountOfCardsRemaining = (): void => {
    const { deck } = this.state;
    this.setState({
      amountOfCardsRemaining: deck.length
    });
  }

  private dealOneCard = (): void => {
    // Assuming we always draw the top card
    const topCardIndex: number = 0;
    this.setDealtCard(topCardIndex);
    this.removeCardFromDeck(topCardIndex);
    this.setAmountOfCardsRemaining();
  }
}

export default App;
