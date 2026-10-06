import React from "react";
import "./ProductCard.css";

function ProductCard({ image, name, description, price, buttonColor, txtcolor }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <h4 className="product-price" style={{color: txtcolor}}>{price}</h4>
      <button
        className="add-to-cart-button"
        style={{ backgroundColor: buttonColor }}
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default ProductCard;
