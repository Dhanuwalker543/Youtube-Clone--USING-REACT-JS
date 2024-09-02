import React from 'react';

function VideoPlayer({ videoSrc }) {
  return (
    <div className="video-player">
      <iframe
        width="100%"
        height="500px"
        src={videoSrc}
        title="Video Player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
