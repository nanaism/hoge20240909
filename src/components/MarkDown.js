import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../blog.css';
import Share from './Share';

function MarkDown({ path }) { 
  const [markdown, setMarkdown] = useState('');
  const [title, setTitle] = useState(''); // Use state for the title
  const url = `https://www.asmrchurch.com${path}`;

  useEffect(() => {
    console.log(`/static/markdown${path}.md`);
    fetch(`/static/markdown${path}.md`)
      .then((response) => {
        if (response.ok) {
          return response.text(); // If response is OK, parse as text
        } else {
          throw new Error('Markdown file not found'); // Handle errors
        }
      })
      .then((text) => {
        setMarkdown(text);

        const firstTitleLine = text.split('\n').find(line => line.startsWith('#'));

        if (firstTitleLine) {
          const firstTitle = firstTitleLine.replace('# ', ''); // Strip leading "# "
          setTitle(firstTitle);
        }
      })
      .catch((error) => {
        console.error(error);
        setMarkdown('# 404 Not Found\nThe requested markdown file could not be found.');
      });
  }, [path]);

  return (
    <div>
      <div className="blog-section">
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </div>
      <Share title={`【ASMRキリスト教会】${title} @asmrchurch #聖書 #ASMR #キリスト教`} url={url} /> 
    </div>
  );
}

export default MarkDown;
