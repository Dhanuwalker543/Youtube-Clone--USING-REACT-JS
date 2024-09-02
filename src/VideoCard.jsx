import React from 'react';
import './VideoCard.css';

function VideoCard({ title, views, timestamp }) {
  return (
    <div className="videoCard">
      <img src="thumbnail.jpg" alt={title} className="videoCard__thumbnail" />
      <div className="videoCard__info">
        <h4>{title}</h4>
        <p>{views} • {timestamp}</p>
      </div>
    </div>
  );
}

export default VideoCard;
