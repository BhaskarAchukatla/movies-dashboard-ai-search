import React, { useState } from 'react';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = async (query) => {
    setLoading(true);
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      });
      const data = await response.json();
      setMovies(data.movies || []);
    } catch (error) {
      console.error('Error searching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={searchMovies} />
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default App;
