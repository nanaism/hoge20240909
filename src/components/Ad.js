import React from 'react';
import './styles.css';

function Ad() {
  return (
    <div className="section ad">
      <h1></h1>

      <div>
        <ul>
            <li>
                ASMRキリスト教会とは？
            </li>
            <li>
                <a target="_blank" href="https://www.kirishin.com/2024/05/19/66663/">
                メディア掲載: キリスト新聞様
                </a>
            </li>
        </ul>
      </div>
      <div>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/YkFU7vBYvZQ?si=QC1MQ6J5YkmshM0r"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="c3">
         <a target="_blank" href="https://www.dlsite.com/home/work/=/product_id/RJ433352.html"><img 
            src={`${process.env.PUBLIC_URL}/static/images/dlsite.png`}
            alt="x" 
            style={{ height: '35px' }}
            />
         </a>
      </div>
    </div>
  );
}

export default Ad;
