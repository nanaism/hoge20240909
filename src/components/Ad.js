import React from 'react';
import './styles.css';

function Ad() {
  return (
    <div className="section ad">
      <h1></h1>

      <div>
        <div>
            <div>
                ASMRキリスト教会とは？
            </div>
            <div>
                <a target="_blank" href="https://www.kirishin.com/2024/05/19/66663/">
                メディア掲載: キリスト新聞様
                </a>
            </div>
        </div>
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
