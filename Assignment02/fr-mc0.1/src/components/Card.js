import React from 'react';
import './style.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={`${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;
