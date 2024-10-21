const  mongoose =require('mongoose');

const orderschma = new mongoose.Schema({
    cartitem : Array ,
    amount: String,
    status :String,
    createdat: Date

});
const ordermodel = mongoose.model('order',orderschma);
module.exports=ordermodel;