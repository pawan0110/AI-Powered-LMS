import express from "express"
import isAuth from "../middleware/isAuth.js"
import { getCurrentUser, UpdateProfile } from "../controller/userController.js"
import upload from "../middleware/multer.js"

const userRauter = express.Router()

userRauter.get("/getcurrentuser", isAuth, getCurrentUser)
userRauter.post("/updateprofile",isAuth,upload.single("photoUrl"),UpdateProfile)

export default userRauter;