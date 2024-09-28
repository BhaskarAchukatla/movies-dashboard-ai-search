const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  const query = req.body.query;
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  try {
    const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      prompt: query
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching from Gemini API');
  }
});

module.exports = router;
