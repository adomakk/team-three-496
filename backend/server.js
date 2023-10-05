/*
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');

app.use(express.json());

// DB CONNECTION
mongoose.connect("mongodb://localhost:27017/Car", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => console.log("connected sucessfully"))
.catch((err) => {console.error(err);});

// SCHEMA
const sch = {
    name:String,
    year: Number,
    __v: Number
    
}
const monmodel = mongoose.model("car-types1", sch);

app.use(
  cors({
    origin: 'http://localhost:3001', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials like cookies, authorization headers
  })
);


// GET REQUEST
/*
app.get('/fetch/:year', function (req, res) {
    const fetchyear = req.params.year; // Make sure to declare 'fetchid' using 'const' or 'let'

    monmodel.find({ year: fetchyear })
        .then(val => {
            res.json(val);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('An error occurred');
        });
});
*/

/*
// GET REQUEST
app.get('/fetch/:name', async (req, res) => {
  const fetchName = req.params.name;

  try {
    console.log('Fetching data for name:', fetchName);
    const cars = await monmodel.find({ name: fetchName });
    console.log('Cars:', cars);
    res.json(cars);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(3000,() => {
    console.log("on port 3000");
})

*/
