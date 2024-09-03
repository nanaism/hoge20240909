import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../blog.css';

function SermonComponent({ id }) {  // Receive 'id' as a prop
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    console.log(`/static/markdown/sermon/${id}.md`);
    fetch(`/static/markdown/blog/${id}.md`)
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
      <div className="blog-section">
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
}

export default SermonComponent;

