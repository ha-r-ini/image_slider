const ordermodel = require('../model/ordermodel');

exports.createorder = async(req,res,next)=>{

    const cartitem =req.body;
    const amount=Number(cartitem.reduce((acc,item)=>(acc+ item.product.price* item.qty),0)).toFixed(2);
    const status= "pending";

   const order= await ordermodel.create({cartitem,amount,status});

    
    res.json({
        success:true,
        order  
    });
}