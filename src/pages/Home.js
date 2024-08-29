import React from 'react';
import Header from '../components/Header';
import BibleList from '../components/BibleList';
import './styles.css';

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <BibleList
          title="旧約聖書"
          books={[
            ['genesis', '創世記'],
            ['exodus', '出エジプト記'],
            ['leviticus', 'レビ記']
          ]}
        />
        <BibleList
          title="新約聖書"
          books={[
            ['matthew', 'マタイによる福音書'],
            ['mark', 'マルコによる福音書'],
            ['luke', 'ルカによる福音書']
          ]}
        />
      </div>
    </div>
  );
}

export default Home;
