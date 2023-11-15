const express = require('express');

const app = express(); // generates new function with app 

app.get('/', (req,res) => {
   res.send({ bye : "buddy" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT);



