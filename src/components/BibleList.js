import React from 'react';

function BibleList({ title, books }) {
  return (
    <div className="section">
      <h1>{title}</h1>
      <ul>
        {books.map(book => (
          <li key={book}><a href={`/bible/${book}`}>{book}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default BibleList;
