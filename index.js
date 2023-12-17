const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys.js')
require('./models/User.js')
require('./services/passport.js')


mongoose.connect(keys.mongoURI) 

const authRoutes = require('./routes/authRoutes.js')

mongoose.connect('mongodb+srv://manisha9459:May09051994@cluster0.c1y3nfe.mongodb.net/reviewcheckerDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


const app = express(); // generates new function with app 

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys:[keys.cookieKey]
  })
)

app.use(passport.initialize()); 
app.use(passport.session());

authRoutes(app)

const PORT = process.env.PORT || 5001;
app.listen(PORT);





