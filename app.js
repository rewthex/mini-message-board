import express from 'express'
import logger from './middleware/logger.js';

const PORT = process.env.port || 8080;

const app = express();

// Logger middleware
app.use(logger);

// Body parser middleware
app.use(express.urlencoded({ extended: false }));

// Setup static folder
app.use(express.static("public"))



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})