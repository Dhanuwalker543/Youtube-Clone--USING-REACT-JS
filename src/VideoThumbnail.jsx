import React from 'react';

const VideoThumbnail = ({ videoSrc, thumbnailSrc, title, onClick }) => {
  return (
    <div onClick={() => onClick(videoSrc)} style={{ cursor: 'pointer', marginBottom: '10px' }}>
      <img src={thumbnailSrc} alt={title} style={{ width: '100%' }} />
      <h4 style={{ color: 'white' }}>{title}</h4>
    </div>
  );
};

export default VideoThumbnail;
