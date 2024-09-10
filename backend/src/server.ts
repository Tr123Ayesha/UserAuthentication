import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  try {
    const connectDB = await import('../db'); // Import dynamically
    res.send('Database connected, and Hello from TypeScript!');
  } catch (err) {
    res.status(500).send('Error connecting to the database.');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
