var mongoose = require('mongoose');

//SET VARIABLE TO MODEL W/ MONGOOSE.MODEL
var Order = mongoose.model("Order");
var Product = mongoose.model("Product");
var Customer = mongoose.model("Customer");
module.exports = {
    create: function(req, res){
        Product.create(req.body, function(err, product){
            if(err){return res.status(400).json(err);}
            res.json(product);
        })
    },
    retrieve: function(req, res){
        Product.find({})
        .populate("orders")
        .exec(function(err, products){
            if(err){return res.status(400).json(err);}
            res.json(products);
        })
    }
}
