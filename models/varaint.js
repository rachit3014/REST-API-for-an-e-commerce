const mongoose=require('mongoose');
const varaintSchema= new mongoose.Schema({
    
   variantname:{
    type:String,
    required:true
   },
   sku:{
    type:String,
    required:true
   },
    additionalcost:
    {
        type:Number,
        required:true
    },
    stockcount:{
        type:Number,
        required:true
    },
    productvaraint:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    
})
const Varaint=mongoose.model('Varaint',varaintSchema)
module. exports=Varaint