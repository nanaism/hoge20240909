import React, { useState } from 'react';
import '../styles.css';
import Ham from './Ham';

function Header({bible}) {
  const [isRuby, setIsRubi] = useState(false);
  const toggleRuby = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const isRuby = urlParams.get('ruby') === 'true';
    urlParams.set('ruby', (!isRuby).toString());
    window.location.search = urlParams.toString();
  };

  return (
    <div className="header">
      <div className="c1">
        <a href="/">聖書ASMR</a>
        {bible && (
           <>
             <span className="sep"></span>
             <button className="toggle-button" onClick={toggleRuby}>
               {new URLSearchParams(window.location.search).get('ruby') === 'true' ? 'あ' : '漢'}
             </button>
           </>
         )}
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

export default Header;
