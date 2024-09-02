import React from 'react';
import VideoCard from './VideoCard';
import './MainContent.css';

function MainContent() {
  return (
    <div className="mainContent">
      <VideoCard title="React Full Course for Beginners" views="119K views" timestamp="7 months ago" />
      <VideoCard title="Chuttamalle | Devara Second Single" views="98M views" timestamp="3 weeks ago" />
    </div>
  );
}

export default MainContent;
