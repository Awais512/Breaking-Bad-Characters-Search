import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          className='form-control'
          placeholder='Search the Characters'
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
