const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./Routes/userRoutes')
const dotenv = require('dotenv')
const path = require('path')
const app = express()
const cors = require('cors')

dotenv.config({
    path: './config.env'
})
app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});
app.use(express.static(path.join(__dirname, '../client/build')));

app.listen(2000, () => {
    console.log('server has been started ');
})
app.use(express.json())
mongoose
    .connect(process.env.DB, {
        // strictQuery: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        // useUnifiedTopology: true
    }).then(con => {

        console.log('connected with moongoses');
    })

app.use('/notes', userRoute)
