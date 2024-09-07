import React from 'react';
import './styles.css';

function BibleList({ title, books }) {
  // todo: add default type
  return (
    <div className="section">
      <h1>{title}</h1>
      <div>
        {books.map(([route, displayName]) => (
          <div className="li" key={route}>
            <a href={`/bible/${route}`}>{displayName}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BibleList;

