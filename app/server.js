import express from 'express';
const app = express();
const PORT = process.env.PORT || 80;

// Root endpoint with query parameter handling
app.get('/', (req, res) => {
  const { name } = req.query;
  
  // If no query parameter is passed, return hello world
  if (!name) {
    return res.send('hello world');
  }
  
  // If the name parameter is a number, return an error
  if (!isNaN(name) && name !== '') {
    return res.status(400).send({ error: 'Name cannot be a number' });
  }
  
  // If a string is passed, return hello with the name
  return res.send(`hello ${name}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});