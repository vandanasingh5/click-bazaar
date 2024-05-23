const mongoose = require("mongoose")

const mondbUrl="mongodb+srv://codewithzosh:GMpOd9Ohed9cNtQu@cluster0.k27nrvr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}