import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles.css';
import Ham from './Ham';

function Header({ bible }) {
  const [isRuby, setIsRuby] = useState(false);

  const toggleRuby = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const currentRuby = urlParams.get('ruby') === 'true';
    urlParams.set('ruby', (!currentRuby).toString());
    window.location.search = urlParams.toString();
    setIsRuby(!currentRuby);  // 状態を更新
  };

  return (
    <div className="header">
      <Helmet>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/static/favicon/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ASMRキリスト教会</title>
        <meta name="description" content="10代〜20代の若者へ。ストレスや精神的な悩み、自殺願望に苦しむあなたに、キリスト教の教えと救いを提供します。睡眠障害や生きづらさを感じるあなたへ、聖書の言葉を通じて安らぎと希望を見つけましょう。まずうちさぁ、屋上あるんだけどさぁ、焼いてかない？（丁寧）" />
        <meta name="keywords" content="ストレス, 精神的な悩み, 自殺願望, 死にたい, 生きていたくない, キリスト教, 聖書, 安らぎ, 希望, 睡眠障害, 10代, 20代, 若者, 心のケア, メンタルヘルス, 毒親, パワハラ, メンヘラ, 親子関係, 人間関係, 聖書研究, プロテスタント, カルバン派, 野獣先輩" />

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta property="og:title" content="若者のためのキリスト教 - ストレスと精神的な悩みを乗り越える。やりますねえ！" />
        <meta property="og:description" content="10代〜20代の若者へ。キリスト教を通じて、ストレスや精神的な苦しみから救いを見つけましょう。死にたい、生きていたくないと感じているあなたへ、聖書の言葉が希望をもたらします。田所浩二のことはいったん忘れてください！" />
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/static/images/thumbnail.png`} /> {/* Replace with actual image URL */}
        <meta property="og:url" content="https://asmrchurch.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="若者のためのキリスト教 - ストレスと精神的な悩みを乗り越える。みたきゃみせてやるよ。おれの信仰" />
        <meta name="twitter:description" content="10代〜20代の若者へ。ストレスや精神的な悩み、自殺願望に苦しむあなたに、キリスト教の教えと救いを提供します。睡眠障害や生きづらさを感じるあなたへ、聖書の言葉を通じて安らぎと希望を見つけましょうと語っていると不幸にも黒塗りの高級車に衝突してしまう。示談の条件とは・・・あくしろよ（エコー）" />
        <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/static/images/thumbnail.png`} /> {/* Replace with actual image URL */}

        {/* Robots and author information */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ASMRキリスト教会" />
      </Helmet>

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
