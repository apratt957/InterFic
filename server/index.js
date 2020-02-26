const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { mongoUrl } = require('../secrets');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/stories', require('./api/stories'));

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;

connection.once('open', function() {
  console.log('MongoDB database connection established successfully');
});

mongoose.set('useFindAndModify', false);

app.listen(PORT, function() {
  console.log('Server is running on Port: ' + PORT);
});
