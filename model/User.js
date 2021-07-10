const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    /* _id:{type:String}, ---->mongo db generate id automatically*/
    nic:String,
    name:String,
    email:String,
    password:String

   
    
});

/* schema.virtual('password').get(function(){
    return this._id;
}); */



module.exports=mongoose.model("users",schema); //User-->datbase table name