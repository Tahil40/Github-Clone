const express = require("express");
const mainRouter = express.Router(); 
const userRouter = require("../routes/user.router");
const repositoryRouter = require("../routes/repository.router");

mainRouter.use(userRouter);
mainRouter.use(repositoryRouter);

mainRouter.get("/", (req, res) => {
    res.send("Server is working successfully....");
});

module.exports = mainRouter;