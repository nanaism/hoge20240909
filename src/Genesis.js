import React, { useEffect, useState } from 'react';

function Genesis() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Fetch the XML file
    fetch('/genesis.xml')
      .then((response) => response.text())
      .then((data) => {
        // Parse the XML
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        setContent(xml);
      })
      .catch((error) => {
        console.error('Error fetching or parsing the XML:', error);
      });
  }, []);

  return (
    <div>
      <h1>創世記 (Genesis)</h1>
      {content ? (
        // Function to render the parsed XML content
        renderXMLContent(content)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

// Function to render the parsed XML content
function renderXMLContent(xml) {
  const book = xml.querySelector('book');
  const title = book.querySelector('title');
  const chapters = book.querySelectorAll('chapter');

  return (
    <div>
      <h2>
        {renderTitle(title)}
      </h2>
      {Array.from(chapters).map((chapter, i) => (
        <div key={i}>
          <h3>Chapter {chapter.getAttribute('id')}</h3>
          {renderChapter(chapter)}
        </div>
      ))}
    </div>
  );
}

function renderTitle(title) {
  return Array.from(title.children).map((word, i) => (
    <ruby key={i}>
      {word.textContent}
      <rt>{word.getAttribute('s')}</rt>
    </ruby>
  ));
}

function renderChapter(chapter) {
  const paragraphs = chapter.querySelectorAll('p');
  return Array.from(paragraphs).map((paragraph, i) => (
    <div key={i}>
      {renderParagraph(paragraph)}
    </div>
  ));
}

function renderParagraph(paragraph) {
  const verses = paragraph.querySelectorAll('verse');
  return (
    <div>
      {Array.from(verses).map((verse, i) => (
        <p key={i}>
          <strong>{verse.getAttribute('id')}: </strong>
          {Array.from(verse.children).map((word, j) => (
            <ruby key={j}>
              {word.textContent}
              <rt>{word.getAttribute('s')}</rt>
            </ruby>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Genesis;

