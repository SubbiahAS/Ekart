import React from "react";
import ProductCard from "./cardUI/ProductCard";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTJb2i9JrVl_9Hf1-12xU2z0IXTh4jL4AgPqs47yDpUSV7ANIohok3oaKYAjpPC57JtKmhky5C7gTtGW25DMUjqeFxN9uahI_mzBJl7ndeTJe8k3KSc9tuDzQ", // Replace with actual Puma Shoes image URL
      name: "Puma Shoes",
      description: "Garnier Pure Active Miceller cleansing water. 125 ml",
      price: "$40",
      buttonColor: "red",
      txtcolor: "red",
    },
    {
      id: 2,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS7-ESn_qN2kwot2ASHdiKzSwl3a6vjCYJ1GM9DNjAE9uXswcqdhLQVyEPNgPo51sqaUd4395_lRHGrQwWbA76oxOOPLY5Ni3YLlxwvk9-fox3DfBCe9fuq", // Replace with actual Smart Watch image URL
      name: "Smart watch",
      description: "Garnier Pure Active Miceller cleansing water. 125 ml",
      price: "$120",
      buttonColor: "teal",
      txtcolor: "teal",
    },
    {
      id: 3,
      image: "https://www.shutterstock.com/image-photo/stylish-mockup-shape-blank-female-260nw-1147198391.jpg", // Replace with actual Top for Women image URL
      name: "Top for Women",
      description: "Garnier Pure Active Miceller cleansing water. 125 ml",
      price: "$20",
      buttonColor: "blue",
      txtcolor: "blue",
    },
  ];

  return (
    <div className="App">
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            buttonColor={product.buttonColor}
            txtcolor={product.txtcolor}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
