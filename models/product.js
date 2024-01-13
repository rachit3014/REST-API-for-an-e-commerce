const mongoose=require('mongoose');
const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:
    {
        type:Number,
        required:true
    },
    mutltiplevaraints:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Varaint'
        }
    ]
})
const Product= mongoose.model('Product',productSchema)
module. exports=Product
