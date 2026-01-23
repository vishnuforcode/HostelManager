const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const db = require('./db')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const UserSchema = require('./Schemas/UserSchema')
const PostSchema = require('./Schemas/Post.model')


const app = express()

app.use(express.json())
app.use(cors({
    origin:'*'
}))

db()


app.get('/' ,(req , res)=>{
    res.send("server ready !!")
})

app.get('/home' , async (req,res)=>{ 
     // all posts data from database
    const data = await PostSchema.Post.find() 
    res.json(data)
  
     
})
app.get('/getToken' , async (req, res)=>{
    const data = req.body
    const token = await jwt.sign( data , process.env.SECRET_KEY)

    res.send(token)

})

app.post('/post', async (req,res)=>{
    try{
        const data = req.body
        if(data){
            await PostSchema.Post.create(data)
            res.send("done post")
        }
    }catch(err){
        console.log({"error" : err});
        
    }
     
    
    
    

    // post data to database
})




app.listen(process.env.PORT ,()=>{
    console.log(`listening at ${process.env.PORT}`);
    
})