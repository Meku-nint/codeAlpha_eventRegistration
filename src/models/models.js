import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
const eventSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    eventId:{
        type:Number,
        required:true,
        unique:true
    }
},{
    timestamps:true
})
const Event=mongoose.model("Event",eventSchema);
const Admin=mongoose.model("Admin",adminSchema);
const User=mongoose.model("User",userSchema);
export default {Event,Admin,User};