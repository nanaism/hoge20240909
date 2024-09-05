import React from 'react';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  EmailShareButton, 
  RedditShareButton, 
  LinkedinShareButton 
} from 'react-share';
import { 
  FacebookIcon, 
  TwitterIcon, 
  EmailIcon, 
  RedditIcon, 
  LinkedinIcon 
} from 'react-share';

const Share = ({title, url}) => {
  return (
    <div className="sharecontainer">
      <span className="tt"> 布教する: </span>
      <div className="share">

        {/* Twitter (X) Share Button */}
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round={false} />
        </TwitterShareButton>

        {/* Facebook Share Button */}
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={32} round={false} />
        </FacebookShareButton>

        {/* Email Share Button */}
        <EmailShareButton url={url} subject={title} body="Check this out:">
          <EmailIcon size={32} round={false} />
        </EmailShareButton>

        {/* Reddit Share Button */}
        <RedditShareButton url={url} title={title}>
          <RedditIcon size={32} round={false} />
        </RedditShareButton>

        {/* LinkedIn Share Button */}
        <LinkedinShareButton url={url} title={title} summary={title}>
          <LinkedinIcon size={32} round={false} />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default Share;
