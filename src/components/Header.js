import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../styles.css';
import Ham from './Ham';

function Header({ bible }) {
  const [pageType, setRubyState] = useState('norm');

  // Initialize pageType based on URL parameter when component mounts
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const currentRuby = urlParams.get('type');
    setRubyState(currentRuby || 'norm');  // Default to 'norm' if no parameter
  }, []);

  const toggleRuby = () => {
    const urlParams = new URLSearchParams(window.location.search);
    let newRubyState;

    if (pageType === 'norm') {
      newRubyState = 'ruby';
    } else if (pageType === 'ruby') {
      newRubyState = 'en';
    } else {
      newRubyState = 'norm';
    }

    urlParams.set('type', newRubyState);
    window.location.search = urlParams.toString(); // Reload the page with the new state

    setRubyState(newRubyState); // Update the state
  };

  return (
    <div className="header">
      <Helmet>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/static/favicon/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ASMRキリスト教会</title>
        <meta name="description" content="10代〜20代の若者へ..." />
        <meta name="keywords" content="..." />
        {/* Add other meta tags here */}
      </Helmet>

      <div className="c1">
        <a href="/">聖書ASMR</a>
        {bible && (
          <>
            <span className="sep"></span>
            <button className="toggle-button" onClick={toggleRuby}>
              {pageType === 'norm' ? '漢' : pageType === 'ruby' ? 'あ' : 'en'}
            </button>
          </>
        )}
      </div>

      <div className="c3">
        <a target="_blank" rel="noopener noreferrer" href="https://x.com/asmrchurch">
          <img
            src={`${process.env.PUBLIC_URL}/static/images/x.png`}
            alt="X (formerly Twitter) logo"
            style={{ width: '35px', height: '35px' }}
          />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@asmrchurch">
          <img
            src={`${process.env.PUBLIC_URL}/static/images/youtube.png`}
            alt="YouTube logo"
            style={{ width: '35px', height: '35px' }}
          />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://asmrchruch.bandcamp.com/">
          <img
            src={`${process.env.PUBLIC_URL}/static/images/bandcamp.png`}
            alt="Bandcamp logo"
            style={{ width: '35px', height: '35px' }}
          />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@sexybible">
          <img
            src={`${process.env.PUBLIC_URL}/static/images/tiktok.png`}
            alt="TikTok logo"
            style={{ width: '35px', height: '35px' }}
          />
        </a>
      </div>

      <div className="ham">
        <Ham />
      </div>
    </div>
  );
}

export default Header;
