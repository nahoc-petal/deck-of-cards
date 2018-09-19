import * as React from 'react';

export type Suit = 'club' | 'diamond' | 'heart' | 'spade';

export interface ICard {
  rank: number;
  suit: Suit;
}

const displayRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export const Card: React.SFC<ICard> = ({ rank, suit }) => (
  <div 
    className="box" 
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: 'auto',
      maxWidth: '14rem',
      minHeight: '20rem',
    }}
  >
    <h2 className="title">{displayRanks[rank - 1]}</h2>
    <h3><img src={`/${suit}.svg`} alt="Suit" /></h3>
  </div>
);