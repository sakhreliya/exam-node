const mongoose = require("mongoose")

let dbConnect = () =>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("Database connected");
    })
    .catch((err)=>{
        console.log(err, "Error");
    })
}
module.exports = dbConnect;