import React, { useState, useEffect } from 'react';
import './styles.css';
import '../blog.css';
import ListComponent from '../components/ListComponent';
import MarkDown from '../components/MarkDown';

function BlogList() {
  return (
    <ListComponent type="blog" title={`ブログ一覧`} />
  );
}

export default BlogList;
