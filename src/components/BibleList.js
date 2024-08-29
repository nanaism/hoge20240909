import React from 'react';

function BibleList({ title, books }) {
  return (
    <div className="section">
      <h1>{title}</h1>
      <ul>
        {books.map(([route, displayName]) => (
          <li key={route}>
            <a href={`/bible/${route}`}>{displayName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BibleList;

