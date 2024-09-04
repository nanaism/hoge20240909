import React, { useState, useEffect } from 'react';
import './styles.css';
import '../blog.css';
import ListComponent from '../components/ListComponent';
import MarkDown from '../components/MarkDown';

function SermonList() {
  return (
    <ListComponent type="sermon" title={`説教一覧`} />
  );
}

export default SermonList;
