const express=require("express");
const router = express.Router();
const {createorder}=require('../controlers/ordercontroler');

router.route('/orders').post(createorder);
module.exports=router;