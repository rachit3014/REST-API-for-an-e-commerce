const express=require('express');
const router=express.Router()
const productcontroller=require('../controller/product')
// routes for create product
router.post('/create',productcontroller.createproduct)
// routes for get product by id
router.get('/product/:id',productcontroller.getproduct)
// routes for update product
router.put('/update/:id',productcontroller.updateproduct)
// routes for upadte  product varaints
router.put('/varaintupdate/',productcontroller.updateproductvaraint)
// routes for search product
router.get('/search/',productcontroller.search)
// routes for delete product
router.delete('/delete/:id',productcontroller.deleteproduct)
// routes for create product  varaint
router.post('/varaint/:id',productcontroller.createvaraint)
// routes for create product
router.get('/all',productcontroller.getallproduct)
module.exports=router;
