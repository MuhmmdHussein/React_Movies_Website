// Mycard.js
import React from 'react';

function Mycard({ title, posterPath }) {
  return (
    <div className="card" style={{ width: '250px' }}> 
      <img 
        src={`https://image.tmdb.org/t/p/w500${posterPath}`} 
        className="card-img-top" 
        alt={title} 
        style={{ height: 'auto' }} 
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
}

export default Mycard;