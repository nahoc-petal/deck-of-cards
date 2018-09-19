import React from 'react';

const displayRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export const Card = ({
  rank, 
  suit,
}) => (
  <div className="box" style={{
    maxWidth: '14rem',
    minHeight: '20rem',
    margin: 'auto'
  }}>
    <h2>{displayRanks[rank]}</h2>
    <h3>{suit}</h3>
  </div>
);