import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { Card } from './Card';

export const Study = ({ deckId }) => {
  const [deck, loadingDeck] = useFetch(`decks/${deckId}`);

  if (loadingDeck) {
    return <h4>Loading, please wait</h4>;
  }
  return (
    <div>
      <h1>{deck.name}</h1>
      {deck.description && <h3>{deck.description}</h3>}
      <div>
        <Card deck={deck} />
      </div>
    </div>
  );
};
