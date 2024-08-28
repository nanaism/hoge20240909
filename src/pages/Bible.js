import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';

function Bible() {
  const { section } = useParams();
  const [searchParams] = useSearchParams();
  const isRuby = searchParams.get('ruby') === 'true';
  const type = isRuby ? "ruby" : "norm";
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/static/html/${type}/${section}.htm`)
      .then(response => response.text())
      .then(data => setContent(data))
      .catch(error => console.error('Error loading the HTML content:', error));
  }, [section]);

  return (
    <div>
      <Header />
      <div className="content">
        <section>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      </div>
    </div>
  );
}

export default Bible;

