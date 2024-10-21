const mongoose = require('mongoose');

const connectdatabase= ()=>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log('mangodb connected to host: '+con.connection.host);
    }
    )

}
module.exports=connectdatabase;