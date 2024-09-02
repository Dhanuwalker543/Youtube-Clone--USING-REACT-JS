import React from 'react';
import './FullScreenPlayer.css';

const videos = [
  { src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg', title: 'S.O.L.I.D. Principles', channel: 'Scaler', views: '500K views', time: '1 year ago' },
  { src: 'https://www.youtube.com/embed/3tmd-ClpJxA', thumbnail: 'https://img.youtube.com/vi/3tmd-ClpJxA/0.jpg', title: 'Chuttamalle | Devara Second Single', channel: 'T-Series Telugu', views: '98M views', time: '3 weeks ago' },
  { src: 'https://www.youtube.com/embed/someid3', thumbnail: 'https://img.youtube.com/vi/someid3/0.jpg', title: 'React Full Course for Beginners', channel: 'JVL Code', views: '119K views', time: '7 months ago' },
  // Add more videos
];

function FullScreenPlayer({ video, onVideoClose }) {
  return (
    <div className="fullscreen-player">
      <div className="video-player">
        <iframe
          width="100%"
          height="100%"
          src={video.src}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-list">
        <button onClick={onVideoClose} className="close-button">Close</button>
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <div className="video-info">
              <h4>{video.title}</h4>
              <p>{video.channel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FullScreenPlayer;
