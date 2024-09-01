import React from 'react';
import './styles.css';
import '../blog.css';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

function BlogList() {
  const articles = [
    'test',
    'articlehash2',
    'articlehash3',
  ];

  return (
    <div>
      <MainHeader />
      <div className="blog-section">
        <h1 className="blog-list-title">ブログ一覧</h1>
        <div className="blog-list">
          {articles.map((id) => (
            <div key={id}>
              <a href={`/blog/${id}`}>
                <Blog id={id} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogList;
