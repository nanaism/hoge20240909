import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogComponent from '../components/BlogComponent';
import '../blog.css';

// 名言集
function Caption() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`/static/markdown/caption.md`)
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Markdown file not found'); // Handle errors
        }
      })
      .then((text) => setMarkdown(text))
      .catch((error) => {
        console.error(error);
        setMarkdown('# 404 Not Found\nThe requested markdown file could not be found.');
      });
  });

  return (
    <div>
      <Header />
      <div className="blog-section">
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </div>
      <Footer />
    </div>
  );
}

export default Caption;
