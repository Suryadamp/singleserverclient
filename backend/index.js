const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const moviesRouter = require('./routes/movies.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://sjsurya340:axTkaEJfXEFev8HR@cluster0.kd224td.mongodb.net/wookiemovies', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Routes
app.use('/movies', moviesRouter);

app.get('/', (req, res) => {
    res.json({ message: 'Server is running!' });
  });

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
