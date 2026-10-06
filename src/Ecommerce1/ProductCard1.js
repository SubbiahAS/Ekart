import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <p style={{marginLeft: '-153px'}}>{product.category}</p>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Size: {product.description}</p>
      <button className="ButtonColor">
      <p> ₹{product.price}</p>
      </button>
      
 
    </div>
  );
};

export default ProductCard;
