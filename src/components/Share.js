import React from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon } from 'react-share';

const Share = ({title, url}) => {
  return (
    <div>
      {/* Facebook Share Button */}
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>

      {/* Twitter (X) Share Button */}
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
    </div>
  );
};

export default Share;

