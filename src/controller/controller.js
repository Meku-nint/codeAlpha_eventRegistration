// Description: This file contains the controller functions for handling requests and responses.
import {Event,Admin,User} from "../models/models.js";
export const addEvent=async(req,res)=>{
    // this function is used to create a new event
     const {title,description,location,date,time}=req.body;
     try {
        if(!title || !description || !location || !date || !time){
           throw new Error("Please fill all the fields");
        }
        const Id=Math.floor(Math.random()*1000000);
        const event=new Event({title,description,location,date,time,eventId:Id});
        await event.save();
        res.status(200).json({
            success:true,
            message:"Event created successfully",
            event
        })
     } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
     }
}
export const registerForEvent=async(req,res)=>{
    // this function is used to register a user for an event
    const {name,email,phone,address,eventId}=req.body;
    try {
        if(!name || !email || !phone || !address || !eventId){
            throw new Error("Please fill all the fields");
        }
        const event=await Event.findOne({eventId});
        if(!event){
            throw new Error("Event not found");
        }
        const user=await User.findOne({email});
        if(user){
            throw new Error("User already registered");
        }
        const newUser=new User({name,email,phone,address,eventId});
        await newUser.save();
    } catch (error) {
         res.status(500).json({message:error.message});
    }
}
export const getAllEvents=async(req,res)=>{
    // this function is used to get all the events
    try {
        const events=await Event.find();
        res.status(200).json({
            success:true,
            events
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const getAllUsers=async(req,res)=>{
    // this function is used to get all the users
    const {eventId}=req.params;
    try {
        if(!eventId){
            throw new Error("Please provide eventId");
        }
        const users=await User.find({eventId});
        res.status(200).json({
            success:true,
            users
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const getAllAdmins=async(req,res)=>{
    // this function is used to get all the admins
    try {
        const admins=await Admin.find();
        res.status(200).json({
            success:true,
            admins
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const addAdmin=async(req,res)=>{
    // this function is used to create a new admin
    const {name,email,phone,address}=req.body;
    try {
        if(!name || !email || !phone || !address){
            throw new Error("Please fill all the fields");
        }
        const admin=new Admin({name,email,phone,address});
        await admin.save();
        res.status(200).json({
            success:true,
            message:"Admin created successfully",
            admin
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const checkRegistration=async(req,res)=>{
    // this function is used to check if a user is registered for an event
    const {eventId,email}=req.body;
    try {
        if(!eventId || !email){
            throw new Error("Please fill all the fields");
        }
        const user=await User.findOne({email});
        if(!user){
            throw new Error("User not found");
        }
        res.status(200).json({
            success:true,
            registered:user.eventId===eventId
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const deleteEvent=async(req,res)=>{
    // this function is used to delete an event
    const {eventId}=req.params;
    try {
        if(!eventId){
            throw new Error("Please provide eventId");
        }
        const event=await Event.findOne({eventId});
        if(!event){
            throw new Error("Event not found");
        }
        await Event.deleteOne({eventId});
        res.status(200).json({
            success:true,
            message:"Event deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const deleteUser=async(req,res)=>{
    // this function is used to delete a user
    const {userId}=req.params;
    try {
        if(!userId){
            throw new Error("Please provide userId");
        }
        const user=await User.findOne({userId});
        if(!user){
            throw new Error("User not found");
        }
        await User.deleteOne({userId});
        res.status(200).json({
            success:true,
            message:"User deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}