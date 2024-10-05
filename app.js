const express = require("express")

const app = express()

const os = require('os')

app.get("/",(req,res)=>{
    res.send(`Hello From ${os.hostname()}`);
})

app.listen(3000,'0.0.0.0',()=> console.log("Server Running"))