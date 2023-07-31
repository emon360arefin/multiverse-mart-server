const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const productRoute = require('./Routes/ProductsRoute')


// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})




// Route
app.get('/', (req, res) => {
    res.send('Multiverse Mart')
})

app.use('/api/products', productRoute)




// Connect to Database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to database");

        // Listen to port
        app.listen(process.env.PORT, () => {
            console.log('listening for requests on port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    }) 