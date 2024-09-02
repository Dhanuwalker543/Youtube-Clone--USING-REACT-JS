import React from 'react';
import VideoIframe from './VideoIframe';

function VideoGrid() {
  const videoIds = [
    "M7lc1UVf-VE", "dQw4w9WgXcQ", "K4TOrB7at0Y", "oRdxUFDoQe0", "ktvTqknDobU",
    "3JZ_D3ELwOQ", "eY52Zsg-KVI", "YlUKcNNmywk", "Zi_XLOBDo_Y", "FTQbiNvZqaY",
    "CdXesX6mYUE", "yRh-dzrI4Z4", "hLQl3WQQoQ0", "4JkIs37a2JE", "OMOGaugKpzs",
    "oOfnXveFo3M", "N6uEMOeDZsA", "kXYiU_JCYtU", "RgKAFK5djSk", "fJ9rUzIMcZQ"
  ];

  const gridStyle = {
    width: '82%',
    position:'absolute',
    left: '15%',
    top:'10%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '15px', 
    padding: '20px',
    backgroundColor:'black'
  };

  return (
    <div style={gridStyle}>
      {videoIds.map((id) => (
        <VideoIframe key={id} videoId={id} />
      ))}
    </div>
  );
}

export default VideoGrid;
