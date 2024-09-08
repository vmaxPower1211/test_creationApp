const mongoose=require('mongoose');

const Test=new mongoose.Schema({

 
    qid:[{
        type:String,
        required:true
    }]


},
{collection:'test-datas'}
)

const model=mongoose.model('test-datas',Test);

module.exports=model