const mongoose = require ('mongoose');


mongoose.connect('mongodb://localhost:27017/mongopractice');


const userSchema = mongoose.Schema({
    name:{type: String, required: true},
    userName:{type: String, required: true},
    email:{type: String, required: true},

})




module.exports = mongoose.model("user",userSchema);    
 
