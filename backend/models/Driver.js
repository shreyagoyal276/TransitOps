const mongoose=require("mongoose");


const driverSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },


    license:{
        type:String,
        required:true
    },


    phone:{
        type:String,
        default:""
    },


    status:{
        type:String,
        default:"Available"
    }


});


module.exports = mongoose.model(
    "Driver",
    driverSchema
);