const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.js')
const productRoute = require('./routes/productroute.js')
const cartRoute = require('./routes/cartroute.js')
const commentRoute = require('./routes/commentroute.js')
const userRoute = require('./routes/userroute.js')
const orderRoute = require('./routes/orderroute.js')
const app = express()

//Middleware and for gettinf data in JSON format
app.use(express.json());

//Using this routes for api
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/comments', commentRoute)
app.use('/api/users', userRoute)
app.use('/api/orders', orderRoute)

//Connecting to database using mongoose
mongoose.connect("mongodb+srv://deep312patel:deep123@cluster0.cnklw1c.mongodb.net/AS4API?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected to Database");
    //If the connection is successsfull then server will start running on port 3000
    app.listen(3000, () => {
        console.log("Server Connected");
    });
})
.catch(() => {
    console.log("Connection failed");
})