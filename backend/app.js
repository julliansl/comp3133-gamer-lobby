const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// *********** Include the Api routes ***********
const userRoutes = require("./routes/users");
const gameRoutes = require("./routes/games");
const authRoutes = require("./routes/auth");

// *********** Connect to Mongo  ***********
console.log('Attempting to connect to mongoose');

mongoose.connect('mongodb://admin1:admin1@ds223760.mlab.com:23760/user_list', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo database!');
  })
  .catch(err  => {
    console.error('App starting error:', err.stack);
  });

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');

  next();
});

// ******** Setup the Api routes ***********
app.use("/api/users", userRoutes);
app.use("/api/games", gameRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
