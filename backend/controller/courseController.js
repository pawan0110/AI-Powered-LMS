import uploadOnCloudinary from "../config/cloudinary.js"
import Course from "../model/courseModel,js"
import Lecture from "../model/lectureModel.js"
import User from "../model/userModel.js"

export const createCourse = async (req,res) => {
    try {
       const {title,category}=req.body;
       if(!title || !category) {
        return res.status(400).json({message:"title and category is required"})
       } 
       const course = await Course.create({
        title,
        category,
        creator: req.userId
       })

       return res.status(201).json(course)
    } catch (error) {
        return res.status(500).json({message:`Failed to create course ${error}`})
    }
} 