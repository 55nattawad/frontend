import React from 'react';

export default function Card() {
  return (
    <div className="card" style={{ width: '20rem' }}>
      <img src="https://tr.rbxcdn.com/8f97e58a96f5c6ebd0a45f6545f8c6ac/768/432/Image/Png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Door</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-outline-primary">Readme</a>
      </div>
    </div>
  );
}

