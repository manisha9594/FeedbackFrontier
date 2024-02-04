const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys.js')
require('./models/User.js')
require('./services/passport.js')
const cors = require('cors');
const app = express(); // generates new function with app 


app.use(cors());




const authRoutes = require('./routes/authRoutes.js')

mongoose.connect('mongodb+srv://manisha9459:May09051994@cluster0.el8x47q.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));



app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys:[keys.cookieKey]
  })
)

app.use(passport.initialize()); 
app.use(passport.session());

authRoutes(app)

const PORT = process.env.PORT || 5003;
app.listen(PORT);





