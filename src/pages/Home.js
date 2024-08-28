import React from 'react';
import Header from '../components/Header';
import BibleList from '../components/BibleList';

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        Bible List
        <BibleList title="旧約聖書" books={['genesis', 'exodus', 'leviticus']} />
        <BibleList title="新約聖書" books={['matthew', 'mark', 'luke']} />
      </div>
    </div>
  );
}

export default Home;
