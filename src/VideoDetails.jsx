import React from 'react';

function VideoDetails({ title, description, channelName }) {
  return (
    <div className="video-details">
      <h1>{title}</h1>
      <p>{description} <span className="read-more">Read more</span></p>
      <div className="channel-details">
        <span>{channelName}</span>
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
}

export default VideoDetails;
