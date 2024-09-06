import React from 'react';

export default function Card() {
  return (
    <div className="card" style={{ width: '20rem' }}>
      <img src="https://tr.rbxcdn.com/5087cd04a0ddd0208b4d3aabd558afa2/768/432/Image/Png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Blox Fruit</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-outline-primary">Readme</a>
      </div>
    </div>
  );
}

