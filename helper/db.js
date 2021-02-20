//import mongoose
const mongoose = require('mongoose');

//establish connection to database
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.6wxlk.mongodb.net/movie-app?retryWrites=true&w=majority",
  { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log("Error: ", err);
    console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
  }
);
mongoose.Promise = global.Promise;