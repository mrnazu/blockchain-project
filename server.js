const {compiledFile} = require('./compile');
const cors = require("cors");
const express= require('express');

const app = express();

const corsOptions = { origin: "http://localhost:3000"};
app.use(cors(corsOptions));

app.get('/', (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(compiledFile));
})

app.listen(8000, ()=>{
    console.log("Server is running...")
})