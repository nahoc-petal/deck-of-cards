import * as React from 'react';

export interface ICardCount {
  amountOfCardsRemaining: number;
}

export const CardCount: React.SFC<ICardCount> = ({ amountOfCardsRemaining }) => (
  <section className='section'>
    <h6 className='subtitle'>
      {amountOfCardsRemaining === 0 ? 
        'No more cards remaining.' : 
        `Cards remaining: ${amountOfCardsRemaining}`
      }
    </h6>
  </section>
);