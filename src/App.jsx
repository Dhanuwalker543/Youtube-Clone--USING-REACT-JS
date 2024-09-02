import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import VideoGrid from './VideoGrid';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <div className="app__content">
          <VideoGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
