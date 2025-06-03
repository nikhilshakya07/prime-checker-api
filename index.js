const express = require('express');
const isPrime = require('./utils/isPrime');

const app = express();
const PORT = 3000;

// Route: /isprime?num=7
app.get('/isprime', (req, res) => {
  const number = parseInt(req.query.num);

  // Input validation
  if (!req.query.num || isNaN(number)) {
    return res.status(400).json({
      error: 'Please provide a valid number using the "num" query parameter.'
    });
  }

  const result = isPrime(number);

  res.status(200).json({
    number,
    isPrime: result
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
