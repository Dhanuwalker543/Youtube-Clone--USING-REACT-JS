import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
        </svg>
        <span>Home</span>
      </div>
      <div className="sidebar__item">
        <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 2L4 12h6l-4 10L20 6h-6l4-4z"></path>
        </svg>
        <span>Shorts</span>
      </div>
      <div className="sidebar__item">
        <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 3h4v4h-4zM5 5h2v14H5zM17 5h2v14h-2zM8 8h8v2H8zm0 4h8v2H8zm0 4h8v2H8z"></path>
        </svg>
        <span>Subscriptions</span>
      </div>
      <div className="sidebar__item">
        <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 6h2v12H4zm4 0h2v12H8zm8 2v8l5-4-5-4zm-4-2h2v12h-2z"></path>
        </svg>
        <span>Library</span>
      </div>
      <div className="sidebar__item">
        <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 3a9 9 0 0 0-9 9H1l4 4 4-4H6a7 7 0 1 1 7 7 7.07 7.07 0 0 1-4-1.19V20A9 9 0 1 0 13 3zm1 9h-4V7h2v4h2z"></path>
        </svg>
        <span>History</span>
      </div>
      <div className="sidebar__item">
        <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 8v8l6-4-6-4zm11-4v12H7v-2H5v2c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v2h2V4h16zm-5 6.5V6l-4 3 4 3.5z"></path>
        </svg>
        <span>Your Videos</span>
      </div>
      <div className="sidebar__item">
        <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2v6h6v2h-8V2h2zM12 8v2H4V8H2v6h2v-4h6v4H8v2h6V8zm6 6h-2v4H4v2h16v-6z"></path>
        </svg>
        <span>Watch Later</span>
      </div>
      <div className="sidebar__item">
        <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
        </svg>
        <span>Liked Videos</span>
      </div>
    </div>
  );
}

export default Sidebar;
