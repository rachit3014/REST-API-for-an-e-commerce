const express=require('express')
const app=express()
const port=8000
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))   
app.use(bodyparser.json())
const db=require('./config/mongoose')

app.use('/',require('./routes/index'))
app.listen(port,function(err)
{
    if(err)
    {
        console.log(err)
    }
    else
    {
      console.log("yup server is running")  
    }
})