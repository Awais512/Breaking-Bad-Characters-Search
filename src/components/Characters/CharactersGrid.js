import React from 'react';
import Spinner from '../Ui/Spinner';
import CharacterItems from './CharacterItems';

const CharactersGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItems key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharactersGrid;
