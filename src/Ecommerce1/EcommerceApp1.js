import React, { useState } from "react";
import products from "./Ecommerce1/products1.json";
import categories from "./Ecommerce1/categories1.json";
import ProductCard from "./Ecommerce1/ProductCard1";
import "./App.css";

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter Products by Category
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    const filtered =
      category === "All"
        ? products
        : products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  };

  // Search Products by Name
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(term) &&
        (selectedCategory === "All" ||
          product.category === selectedCategory)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <h1>E-Commerce App</h1>

      {/* Category Dropdown */}
      <div className="categories">
        <label htmlFor="category-select" className="category-label">
          Select Category:
        </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => filterByCategory(e.target.value)}
          className="category-dropdown"
        >
          <option value="All">All</option>
          {categories
            .filter((category) => category !== "All") // Filter out "All" if it's already in categories
            .map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
        </select>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />

      {/* Product List */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
