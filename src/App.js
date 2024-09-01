import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Bible from './pages/Bible';
import Blog from './pages/Blog';
import BlogList from './pages/BlogList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bible/:section" element={<Bible />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;

