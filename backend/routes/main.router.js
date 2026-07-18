const express = require("express");
const mainRouter = express.Router(); 
const userRouter = require("../routes/user.router");

mainRouter.use(userRouter);

mainRouter.get("/", (req, res) => {
    res.send("Server is working successfully....");
});

module.exports = mainRouter;