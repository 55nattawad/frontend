import React from 'react';

export default function Card() {
  return (
    <div className="card" style={{ width: '20rem' }}>
      <img src="https://blox-fruits.com/wp-content/uploads/2023/10/Bomb-Fruit-Blox-Fruits.webp" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Bome Fruit</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-outline-primary">Go somewhere</a>
      </div>
    </div>
  );
}

