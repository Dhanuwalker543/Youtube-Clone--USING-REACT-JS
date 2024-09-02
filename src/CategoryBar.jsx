import React from 'react';
import './CategoryBar.css';

const categories = ['All', 'Music', 'React routers', 'Git', 'AI', 'Shilpa Rao', 'Tamil Cinema', 'HTML5', 'Gaming'];

function CategoryBar() {
  return (
    <div className="category-bar">
      {categories.map((category, index) => (
        <button key={index} className="category-button">
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
