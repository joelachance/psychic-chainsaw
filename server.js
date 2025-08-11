import express from 'express';
const app = express();
const PORT = process.env.PORT || 80;

// Middleware to parse JSON bodies
app.use(express.json());

// Root endpoint with query parameter handling
app.get('/', (req, res) => {
  const { name } = req.query;
  
  // If no query parameter is passed, return hello world
  if (!name) {
    return res.send('hello world');
  }
  
  // If the name parameter is a number, return an error
  if (!isNaN(name) && name !== '') {
    console.error('Name cannot be a number');
    return res.status(400).send({ error: 'Name cannot be a number' });
  }
  
  // If a string is passed, return hello with the name
  console.log(`WORKING: hello ${name}`);
  return res.send(`hello ${name}`);
});

app.post('/users', (req, res) => {
  if (!req.body) { return res.status(400).json({ message: 'Name is required' }); }
  if (!req.body.name) {
    return res.status(400).json({ message: 'Name is required' });
  }
  const { name } = req.body;
  console.log(`WORKING: POST /users ${name}`);
  return res.send(`POST /users ${name}`);
});

app.post('/fixme', (req, res) => {
  const { name } = req.body;
  console.log(`WORKING: POST /fixme ${name}`);
  return res.send(`POST /fixme ${name}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});