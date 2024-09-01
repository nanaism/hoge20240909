import React, { useState, useEffect } from 'react';
import './styles.css';
import '../blog.css';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import BlogComponent from '../components/BlogComponent';

function BlogList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/static/markdown/blog/blogList.json')
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error('Error fetching blog list:', error));
  }, []);

  return (
    <div>
      <MainHeader />
      <div className="blog-section">
        <h1 className="blog-list-title">ブログ一覧</h1>
        <div className="blog-list">
          {articles.map((id) => (
            <div key={id}>
              <a href={`/blog/${id}`}>
                <BlogComponent id={id} />
              </a>
              <hr/>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogList;
