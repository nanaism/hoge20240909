import React, { useState } from 'react';
import '../styles.css';

function Header() {
  const [isRuby, setIsRubi] = useState(false);
  const toggleRuby = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const isRuby = urlParams.get('ruby') === 'true';
    urlParams.set('ruby', (!isRuby).toString());
    window.location.search = urlParams.toString();
  };

  return (
    <div className="header">
      <span className="c1">
        <a href="/">ASMRキリスト教会</a>
      </span>
      <span className="sep">|</span>
      <button className="toggle-button" onClick={toggleRuby}>
        {new URLSearchParams(window.location.search).get('ruby') === 'true' ? 'ルビを外す' : 'ルビを付ける'}
      </button>
    </div>
  );
}

export default Header;
