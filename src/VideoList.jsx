import React from 'react';

function VideoList({ videos, onVideoSelect }) {
  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <div key={index} className="video-item" onClick={() => onVideoSelect(video)}>
          <img src={video.thumbnail} alt={video.title} />
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
