import React, { useState } from 'react';
import '../styles.css';

function MainHeader() {
  const [isRuby, setIsRubi] = useState(false);
  return (
    <div className="header">
      <span className="c1">
        <a href="/">ASMRキリスト教会</a>
      </span>
    </div>
  );
}

export default MainHeader;
