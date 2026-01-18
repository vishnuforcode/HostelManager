const express = require('express')
const dotenv = require('dotenv')


const app = express()
dotenv.config()
app.use(express.json())



app.get('/' ,(req , res)=>{
    res.send("server ready !!")
})


app.listen(process.env.PORT ,()=>{
    console.log(`listening at ${process.env.PORT}`);
    
})