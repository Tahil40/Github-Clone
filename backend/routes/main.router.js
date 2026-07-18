const express = require("express");
const mainRouter = express.Router(); 
const userRouter = require("../routes/user.router");
const repositoryRouter = require("../routes/repository.router");
const issueRouter = require("../routes/issue.router");

mainRouter.use(userRouter);
mainRouter.use(repositoryRouter);
mainRouter.use(issueRouter);

mainRouter.get("/", (req, res) => {
    res.send("Server is working successfully....");
});

module.exports = mainRouter;