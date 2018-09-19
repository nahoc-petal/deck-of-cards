import * as React from 'react';
import './Card.style.css';

export type Suit = 'club' | 'diamond' | 'heart' | 'spade';

export interface ICard {
  rank: number;
  suit: Suit;
}

const displayRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export const Card: React.SFC<ICard> = ({ rank, suit }) => (
  <div className="box">
    <h2 className="title is-marginless rank">{displayRanks[rank - 1]}</h2>
    <h2 className="title is-marginless rank-reverse">{displayRanks[rank - 1]}</h2>
    <img src={`/images/${suit}.svg`} alt="Suit" />
  </div>
);