
const express = require('express')
const app = express()
const mongoose = require('./dbs');
app.use(express.json());
const cors = require("cors");
app.use(cors());


const mainRoutes = require('./mainRoutes');
app.use('/api', mainRoutes);


app.listen(3003,()=>{
    console.log("Server started");
})
