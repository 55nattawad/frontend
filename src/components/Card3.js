import React from 'react';

export default function Card() {
  return (
    <div className="card" style={{ width: '20rem' }}>
      <img src="https://media.karousell.com/media/photos/products/2023/11/6/blox_fruit__1699268575_02881099.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Dragon China Red</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-outline-primary">Go somewhere</a>
      </div>
    </div>
  );
}

