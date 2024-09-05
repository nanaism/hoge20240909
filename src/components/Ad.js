import React from 'react';
import './styles.css';

function Ad() {
  return (
    <div className="section ad">
      <h1></h1>

      <div>
        <div>
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://www.kirishin.com/2024/05/19/66663/">
              メディア掲載: キリスト新聞様
            </a>
          </div>
          <div>
            <a target="_blank" rel="noopener noreferrer" href="/caption">
              キリスト教でメンタル回復・コスパ名言集
            </a>
          </div>
        </div>
      </div>
      
      <div className="">
        <a target="_blank" rel="noopener noreferrer" href="https://www.dlsite.com/home/work/=/product_id/RJ433352.html">
          <img 
            src={`${process.env.PUBLIC_URL}/static/images/dlsite.png`}
            alt="x" 
            style={{ height: '35px' }}
          />
        </a>
      </div>

      {/* Corrected iframe in React */}
      <iframe 
        style={{ border: 0, width: '100%', height: '120px' }} 
        src="https://bandcamp.com/EmbeddedPlayer/album=3571744779/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" 
        title="bandcamp-player"
      >
        <a href="https://asmrchruch.bandcamp.com/album/asmr-27">
          新約聖書ASMR｜ルカによる福音書 by 橆綴,七七七七,ちぇーしゃん
        </a>
      </iframe>
    </div>
  );
}

export default Ad;
