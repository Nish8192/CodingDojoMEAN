var mongoose = require('mongoose');

//SET VARIABLE TO MODEL W/ MONGOOSE.MODEL
var Order = mongoose.model("Order");
var Product = mongoose.model("Product");
var Customer = mongoose.model("Customer");
module.exports = {
    create: function(req, res){
        Order.create(req.body, function(err, order){
            if(err){return res.status(400).json(err);}
            Product.findOne({_id: req.body._product}, function(err, product){
                if(product.quantity < req.body.quantity){
                    Order.remove({_id: order._id}, function(err){
                        if(err){return res.status(400).json(err);}
                    })
                    return res.json({errors: "Not enough inventory left!"});
                }
                else{
                    product.quantity -= req.body.quantity;
                    product.save(function(err){
                        if(err){return res.status(400).json(err);}
                    })
                }
            res.json(order);
            })
        })
    },
    retrieve: function(req, res){
        Order.find({})
        .populate("_customer")
        .populate("_product")
        .exec(function(err, orders){
            if(err){return res.status(400).json(err);}
            Customer.find({}, function(err, customers){
                if(err){return res.status(400).json(err);}
                Product.find({}, function(err, products){
                    if(err){return res.status(400).json(err);}
                    res.json({orders: orders, products: products, customers: customers});
                })
            })
        })
    }
}
