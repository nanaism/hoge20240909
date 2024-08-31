import React from 'react';
import './styles.css';

function BibleList({ title, books }) {
  return (
    <div className="section">
      <h1>{title}</h1>
      <div>
        {books.map(([route, displayName]) => (
          <div class="li" key={route}>
            <a href={`/bible/${route}`}>{displayName}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BibleList;

