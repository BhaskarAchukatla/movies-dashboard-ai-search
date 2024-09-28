const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/popular', async (req, res) => {
  const TMDB_API_KEY = process.env.TMDB_API_KEY;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).send('Error fetching popular movies');
  }
});

module.exports = router;
