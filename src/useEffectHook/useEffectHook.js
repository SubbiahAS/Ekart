// import React, {useState, useEffect} from 'react';
// import './App.css';

// function App() {

//   let [image, setimage] = useState(null)

//   useEffect(() => {
//     fetch("https://backend-crud-one.vercel.app/product")
//     .then(response => response.json())

//     .then(data => setimage(data.message))
//   },[])

//   return (
//     <div className="App">

//     {image && <img src={image}></img>}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://backend-crud-one.vercel.app/product")
      .then(response => response.json())
      .then(data => setProductList(data))
      // .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>
      {productList.length > 0 ? (
        <ul className="product-list">
          {productList.map(product => (
            <li key={product.id} className="product-item">
              {/* Dynamically display all product fields */}
              {Object.keys(product).map(key => (
                <p key={key}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
                  {key === "image" ? (
                    <img src={product[key]} alt={product.name} className="product-image" />
                  ) : (
                    product[key]
                  )}
                </p>
              ))}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default App;