// require dotenv
const dotenv = require("dotenv");
dotenv.config();

// import packages
const express = require('express');

//import database connect
const connectDB = require('./database/db');

// import routes handlers
const userRoutes = require('./routes/user.routes');

//invoke our db connection
connectDB();

// create an instance of express
const app = express();

// declare your port
const port = process.env.PORT || 7779;

// express middleware
app.use(express.json());

// health check
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Home page 🍟🍟🍟🍟🍟🍟🍟' });
});

// use route handlers
app.use('/api', userRoutes);

// listen to server
app.listen(port, () => {
  console.log(`app is running on port http://localhost:${port}`);
});
