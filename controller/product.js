const Product=require('../models/product')
const Varaiant=require('../models/Varaint')

// module for craete product
module.exports.createproduct= async function(req,res){
    try {
        let product= await Product.create(req.body)
        const {name,description,price,id}=product
        return res.status(200).json({
            sucess:true,
            message:"sucessfully craeted product",
            
            product:{
                id,
                name,
                description,
                price,
            }
        })
    
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message:"unable to create",
            sucess:false
        })
        
    }

}
// module for update product
module.exports.updateproduct= async function(req,res)
{
    try {
        const id=req.params.id
        let product= await Product.findByIdAndUpdate(id,req.body)
        return res.status(200).json({
            message:"sucesfully updated",
            sucess:true
        })  
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message:'unable to update',
            sucess:false
        })
        
    }
}



// module for updateproductvaraint
module.exports.updateproductvaraint= async function(req,res)
{
    try {
        console.log(req.query)
        let product= await Product.findById(req.query.productid)
        if (product)
        {
            let varaint =await Varaiant.findByIdAndUpdate(req.query.variantid,req.body)
        }
        return res.status(200).json({
            message:"sucesfully updated",
            sucess:true
        })  
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message:'unable to update',
            sucess:false
        })
        
    }
}

// module for deleteproduct
module.exports.deleteproduct=async function(req,res)
{
    try {
        await Product.findByIdAndDelete(req.params.id)
        await Varaiant.deleteMany({productvaraint:req.params.id})
        

        return res.status(200).json({
            message:'sucessfully deleted',
            sucess:true
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            sucess:false,
            message:"unable to delete"
        })
        
    }
}



// module for search product by thier name description and variant name
module.exports.search = async function(req,res)
{
    try {
        const keyword=req.query.keyword
        console.log(req.query.keyword)
        let product= await  Product.find({
            $or:[
                {name:{$regex: keyword, $options: 'i'}},
                {description:{$regex: keyword, $options:'i'}},
              
            ]
         
    
        }).populate('mutltiplevaraints')
        let varaint=await Varaiant.find({
            $or:[
                {varaintname:{$regex: keyword, $options: 'i'}}
              
            ]
        })
        return res.status(200).json({
            sucess:true,
            message:"sucesfully ",
            product,
            varaint
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message:"some error in getting data",
            sucess:false
        })
        
    }
  
   
}
// module for create varaint
module.exports.createvaraint=async function(req,res)

{
    try {
        let product= await Product.findById(req.params.id)
        req.body.productvaraint=product
        console.log(req.body)
        if (product)
        {
            const varaint =await Varaiant.create(req.body)
            product.mutltiplevaraints.push(varaint)
            product.save()
            return res.status(200).json({
                sucess:true,
                message:"sucesfully cretaed",
                varaint
            })
    
        }
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message:"error in creating data",
            sucess:false
        })
        
    }


}
// // module for getallproduct details
module.exports.getallproduct=async function (req,res)
{
    try {
        let product = await Product.find({})
        .populate('mutltiplevaraints')
        return res.status(200).json({
            product
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message:"some error in getting data",
            sucess:false
        })
    }

}
module.exports.getproduct=async function(req,res)
{
    try {
        let product= await Product.findById(req.params.id)
        .populate('mutltiplevaraints')
        return res.status(200).json({
            sucess:true,
            product
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message:"some error in getting data",
            sucess:false
        })
        
    }
}