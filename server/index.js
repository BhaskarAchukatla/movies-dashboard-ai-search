const express = require('express');
const dotenv = require('dotenv');
const moviesRoute = require('./routes/movies');
const searchRoute = require('./routes/search');
dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/movies', moviesRoute);   // TMDB API for fetching popular movies
app.use('/api/search', searchRoute);   // Gemini API for AI-based search

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
