import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogComponent from '../components/BlogComponent';
import '../blog.css';

function Sermon() {
  const [markdown, setMarkdown] = useState('');
  const { id } = useParams();

  useEffect(() => {
    console.log(`/static/markdown/sermon/${id}.md`);
    fetch(`/static/markdown/sermon/${id}.md`)
      .then((response) => {
        if (response.ok) {
          return response.text(); // If response is OK, parse as text
        } else {
          throw new Error('Markdown file not found'); // Handle errors
        }
      })
      .then((text) => setMarkdown(text))
      .catch((error) => {
        console.error(error);
        setMarkdown('# 404 Not Found\nThe requested markdown file could not be found.');
      });
  }, [id]);

  return (
    <div>
      <Header />
      <h1>Sermon Post</h1>
      <div className="sermon-section">
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </div>
      <Footer />
    </div>
  );
}

export default Sermon;
