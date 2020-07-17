const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/productDb');
const schema = mongoose.schema;

var NewProductSchema=new mongoose.Schema({
    productId : Number,
    productName : String,
    productCode : String,
    releaseDate : String,
    description : String,
    price : Number,
    starRating : Number,
    imageUrl : String

});
  var Productdata=mongoose.model('product',NewProductSchema);
  module.exports = Productdata;
