import React, { useState, useEffect } from 'react';
import './styles.css';
import '../blog.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MarkDown from '../components/MarkDown';

function ListComponent({ type, title }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`/static/markdown/${type}/list.json`)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error('Error fetching list:', error));
  }, [type]);

  return (
    <div>
      <Header />
      <div className="blog-section">
        <div className="blog-list">
          {articles.map((id) => (
            <div key={id}>
              <MarkDown path={`/${type}/${id}`} />
              <hr/>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ListComponent;
