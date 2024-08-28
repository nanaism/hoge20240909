import React, { useState } from 'react';
import '../styles.css';

function Header() {
  const [isRubi, setIsRubi] = useState(false);
  const toggleRubi = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const isRubi = urlParams.get('rubi') === 'true';
    urlParams.set('rubi', (!isRubi).toString());
    window.location.search = urlParams.toString();
  };

  return (
    <div className="header">
      <span className="c1">
        <a href="/">ASMRキリスト教会</a>
      </span>
      <span className="sep">|</span>
      <button className="toggle-button" onClick={toggleRubi}>
        {new URLSearchParams(window.location.search).get('rubi') === 'true' ? 'ルビを外す' : 'ルビを付ける'}
      </button>
    </div>
  );
}

export default Header;
