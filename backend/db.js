const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://20bsm060:YagneshParth@yagneshdatabase.5hlpou4.mongodb.net/Doc-app"
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log(`Connected to Mongo Successfully ${mongoose.connection.host}`);
    })
}
module.exports = connectToMongo;   