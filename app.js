const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')
const app = express()

dotenv.config({
    path: './config.env'
})

app.listen(2000, () => {
    console.log('server has been started ');
})

mongoose
    .connect(process.env.DB, {
        // strictQuery: true
        // useCreateIndex: true,
        // useFindAndModify: false,
        // useUnifiedTopology: true
    }).then(con => {

        console.log('connected with moongoses');
    })