var mongoose = require('mongoose');

//SET VARIABLE TO MODEL W/ MONGOOSE.MODEL
var Order = mongoose.model("Order");
var Product = mongoose.model("Product");
var Customer = mongoose.model("Customer");
module.exports = {
    index: function(req, res){
        Order.find({})
        .populate("_customer")
        .populate("_product")
        .exec(function(err, orders){
            if(err){return res.status(400).json(err);}
            Customer.find({})
            .populate("orders")
            .exec(function(err, customers){
                if(err){return res.status(400).json(err);}
                Product.find({})
                .populate("orders")
                .exec(function(err, products){
                    if(err){return res.status(400).json(err);}
                    res.json({customers:customers, orders:orders, products:products})
                })
            })
        })
    },
    create: function(req, res){
        Customer.find({name: req.body.name}, function(err, customer){
            if(err){res.json(err);}
            if(customer){res.json({errors: "This user already exists!!"})}
            else{
                Customer.create(req.body, function(err, customer){
                    if(err){return res.status(400).json(err);}
                    res.json(customer);
                })
            }
        })
    },
    destroy: function(req, res){
        Customer.remove({_id: req.params.id}, function(err, customer){
            if(err){return res.status(400).json(err);}
            res.json(customer);
        })
    }
}
