const mongoose=require('mongoose');

const Question=new mongoose.Schema({

 
    type:{
        type:String,
        required:true
    },

    difficulty:{
        type:String,
        required:true
    },

    discription:{
        type:String,
        required:true
    }




},
{collection:'question-datas'}
)

const model=mongoose.model('question-datas',Question);

module.exports=model