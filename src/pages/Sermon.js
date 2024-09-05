import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../components/Header';
import MarkDown from '../components/MarkDown';
import Footer from '../components/Footer';
import Share from '../components/Share';
import '../blog.css';

function Sermon() {
  const [markdown, setMarkdown] = useState('');
  const { id } = useParams();

  return (
    <div>
      <Header />
      <MarkDown path={`/sermon/${id}`} />
      <Share title={"aaa"} url={"aaa"} />
      <div className="return">
        <a href="/sermon">説教一覧</a>
      </div>
      <Footer />
    </div>
  );
}

export default Sermon;
