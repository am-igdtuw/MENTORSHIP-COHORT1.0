import React from 'react';
import ProductCard from './Card';
import productsData from '../data/cards.json';
import './style.css';

const Feed = () => {
  return (
    <div className="feed">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Feed;
