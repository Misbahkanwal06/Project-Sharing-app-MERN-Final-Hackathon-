const {Schema,model} = require('mongoose');

const userSchema = Schema({
    name:String,
    email: {type:String, 
         unique: true,
        required: 'Email address is required'},
    password:String,
    creationDate:{ type: Date, default: Date.now },
    
})
const userModel = model('Users',userSchema);
console.log("User");
module.exports = userModel;
