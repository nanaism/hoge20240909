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
      <div className="leftarea">
        <span className="c1">
          <a href="/">ASMRキリスト教会</a>
        </span>
        <span className="sep"></span>
        <button className="toggle-button" onClick={toggleRuby}>
          {new URLSearchParams(window.location.search).get('ruby') === 'true' ? 'ルビを外す' : 'ルビを付ける'}
        </button>
      </div>
    </div>
  );
}

export default Header;
