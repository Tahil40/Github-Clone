const express = require("express"); 
const userRouter = express.Router();
const {getAllUsers, signUP, login, getUserProfile, updateUserProfile, deleteUserProfile} = require("../controllers/userController");

userRouter.get("/get-users", getAllUsers);
userRouter.post("/create-account", signUP);
userRouter.post("/login", login);
userRouter.get("/get-profile", getUserProfile);
userRouter.put("/update-profile", updateUserProfile);
userRouter.delete("/delete-profile", deleteUserProfile);

module.exports = userRouter;