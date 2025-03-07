import express from 'express';
const app = express();

// Add a root route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ... your other routes ...

export default app; 