import * as React from 'react';
import { shuffleArray } from './../utils/utils';
import { Card, ICard, Suit } from './Card';
import { CardCount } from './CardCount'; 
import { Notification } from './Notification';

interface IPlaygroundState {
  amountOfCardsRemaining: number,
  dealtCard: ICard | null,
  deck: ICard[],
  ranks: number[],
  shuffled: boolean,
  suits: Suit[],
}

class Playground extends React.Component<any, IPlaygroundState> {

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
      <div>
        <section className='section'>
          {dealtCard ?
            <Card 
              rank={dealtCard.rank}
              suit={dealtCard.suit}
            />
          : null}
        </section>

        {!dealtCard && shuffled ?
          <Notification 
            message={'Cards shuffled! Try dealing one card.'}
            type={'is-success'}
          />
        : null}

        <section className='section'>
          <button
            className='button is-primary is-medium'
            disabled={shuffled}
            onClick={this.shuffleDeck}
          >
            Shuffle Deck
          </button>

          {amountOfCardsRemaining > 0 ? 
            <button
              className='button is-primary is-medium'
              style={{
                marginLeft: '1rem'
              }}
              disabled={!shuffled}
              onClick={this.dealOneCard}
            >
              Deal One Card
            </button> 
          : null }
        </section>

        <CardCount amountOfCardsRemaining={amountOfCardsRemaining}/>
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

  private setAmountOfCardsRemaining = (): void => {
    const { deck } = this.state;
    this.setState({
      amountOfCardsRemaining: deck.length
    });
  }

  private setShuffledToTrue = (): void => {
    this.setState({
      shuffled: true
    });
  }

  private setDealtCard = (index: number): void => {
    const { deck } = this.state;
    this.setState({
      dealtCard: deck[index]
    });
  }

  private shuffleDeck = (): void => {
    const { deck } = this.state;
    const deckShuffled = shuffleArray(deck);
    this.setDeck(deckShuffled);
    this.setShuffledToTrue();
  }

  private dealOneCard = (): void => {
    // Assuming we always draw the top card
    const topCardIndex: number = 0;
    this.setDealtCard(topCardIndex);
    this.removeCardFromDeck(topCardIndex);
    this.setAmountOfCardsRemaining();
  }

  private removeCardFromDeck = (index: number): void => {
    const { deck } = this.state;
    deck.splice(index, 1);
    this.setDeck(deck);
  }
}

export default Playground;
