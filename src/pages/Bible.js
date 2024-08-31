import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';

function Bible() {
  const { section } = useParams();
  const [searchParams] = useSearchParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const isRuby = searchParams.get('ruby') === 'true';
    const type = isRuby ? "ruby" : "norm";

    console.log(`${process.env.PUBLIC_URL}/static/html/${type}/${section}.htm`);
    console.log(`${process.env.PUBLIC_URL}/static/html/${type}/${section}.htm`);
    console.log(`${process.env.PUBLIC_URL}/static/html/${type}/${section}.htm`);
    fetch(`${process.env.PUBLIC_URL}/static/html/${type}/${section}.htm`)
      .then(response => response.text())
      .then(data => setContent(data))
      .catch(error => console.error('Error loading the HTML content:', error));
  }, [section, searchParams]); // Include searchParams as a dependency

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
