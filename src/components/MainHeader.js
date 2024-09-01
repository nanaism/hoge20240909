import React, { useState } from 'react';
import '../styles.css';
import Ham from './Ham';

function MainHeader() {
  const [isRuby, setIsRubi] = useState(false);

  return (
    <div className="header">
      <div className="c1">
        <a href="/">ASMRキリスト教会</a>
      </div>
      <div className="c3">
         <a target="_blank" href="https://x.com/asmrchurch"><img 
            src={`${process.env.PUBLIC_URL}/static/images/x.png`}
            alt="x" 
            style={{ width: '35px', height: '35px' }}
            />
         </a>
         <a target="_blank" href="https://www.youtube.com/@asmrchurch"><img 
            src={`${process.env.PUBLIC_URL}/static/images/youtube.png`}
            alt="x" 
            style={{ width: '35px', height: '35px' }}
            />
         </a>
         <a target="_blank" href="https://asmrchruch.bandcamp.com/"><img 
            src={`${process.env.PUBLIC_URL}/static/images/bandcamp.png`}
            alt="x" 
            style={{ width: '35px', height: '35px' }}
            />
         </a>
         <a target="_blank" href="https://www.tiktok.com/@sexybible"><img 
            src={`${process.env.PUBLIC_URL}/static/images/tiktok.png`}
            alt="x" 
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

export default MainHeader;
