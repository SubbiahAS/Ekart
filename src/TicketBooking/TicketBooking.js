import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://backend-crud-one.vercel.app/product')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  const handleAddToCart = (movie) => {
    alert(`Added ${movie.name} to cart!`);
  };

  // const handleViewDetails = (movie) => {
  //   alert(`Viewing details for ${movie.name}`);
  // };

  return (
    <div className="app-container">
      <h1>Movie List</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.name} className="movie-image" />
            <h2 className='movieName'>{movie.name}</h2>
            {/* <p><strong>Release Date:</strong> {movie.releasedate}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Budget:</strong> {movie.budget}</p> */}
            <p><strong>Ticket Price:</strong> ₹{movie.ticketprice}</p>
            <div className="button-group">
              <button onClick={() => handleAddToCart(movie)} className="button add-button">
                Add to Cart
              </button>
              <button className="button view-button">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;