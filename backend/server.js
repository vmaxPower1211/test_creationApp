const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const Test=require('./models/Test')
app.use(cors())
const Question = require('./models/Question')
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/rohit')

app.post('/fet', async (req,res)=>{
    console.log(req.body)
        const questio=await Question.find({
            type:req.body.type,
            difficulty:req.body.difficulty
        });
        if(questio){

            return res.json(questio)
           
        }
        else{
            return res.json({status:'error'})
        }
})

app.post('/store', async (req,res)=>{
    console.log(req.body)
        try{
            await Test.insertMany({
                qid:req.body.qids
            })
            res.json({status:'ok'})
        }
        catch(err){
            console.log(err)
        }
})
app.get('/all', async (req,res)=>{
    try{
        const datas=await Test.find({})
        res.send(datas)
        // console.log(data)
    }
    catch(err){
        console.log(err)
    }
})

app.get("/hello",(req,res)=>{
    res.send("Hello world")
})

app.listen(1234,()=>{
    console.log("Server is running on port number 1234")
})