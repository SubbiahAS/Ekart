import React, { useState, useEffect } from 'react';

function App () {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://backend-crud-one.vercel.app/product')
      .then(response => response.json())
      .then(data => setMovies(data))

  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.name}</h2>
            <p><strong>Title:</strong> {movie.title}</p>
            <p><strong>Release Date:</strong> {movie.releasedate}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Budget:</strong> {movie.budget}</p>
            <p><strong>Ticket Price:</strong> ₹{movie.ticketprice}</p>
            <img src={movie.image} alt={movie.name} width="200" />
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default App;
