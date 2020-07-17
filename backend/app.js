const express=require('express');
const ProductData= require('./src/model/Productdata');
const cors= require ('cors');
var bodyparser=require('body-parser');
const { Router } = require('express');
var app=new express();
app.use(cors());
app.use(bodyparser.json())
app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    ProductData.find()
    .then(function(products){
        res.send(products);
    });

});
app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    var data ={
        productId: req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating: req.body.product.starRating,
        imageUrl : req.body.product.imageUrl,

    }
    var product = new ProductData(data);
    console.log(product);
    product.save();
    
});

app.post('/deleteProduct',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    const id=req.body.id;
    ProductData.deleteOne({_id:id})
    .then((products)=>{
        res.send('Deleted One Product');
    });

})
app.post('/EditProduct',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    var data ={
        productId: req.body.item.productId,
        productName : req.body.item.productName,
        productCode : req.body.item.productCode,
        releaseDate : req.body.item.releaseDate,
        description : req.body.item.description,
        price : req.body.item.price,
        starRating: req.body.item.starRating,
        imageUrl : req.body.item.imageUrl

    }
    ProductData.updateOne({_id:req.body.item._id},{$set:{productId:data.productId,
        productName:data.productName,
        productCode:data.productCode,
        releaseDate:data.releaseDate,
        description:data.description,
        price:data.price,
        starRating:data.starRating,
        imageUrl:data.imageUrl}})
    

    .then((products)=>{
        res.send('Updated One Product');
    });

    

})

app.post('/product',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    const id=req.body.id;
    ProductData.find({_id:id})
    .then(function(product){
        res.send(product);
    });

});

app.listen(3000,function(){
    console.log('listening to port 3000')
});