import React from 'react';

function VideoIframe({ videoId }) {
  return (
    <iframe
      width="100%"
      height="200"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export default VideoIframe;
