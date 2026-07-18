const express = require("express");
const repositoryRouter = express.Router();
const {
  createRepository,
  getAllRepositories,
  fetchRepositoryById,
  fetchRepositoryByName,
  fetchRepositoryForLoggedInUser,
  updateRepositoryById,
  deleteRepositoryById,
  toggleVisibilityOfRepositoryById,
} = require("../controllers/repositoryController");

repositoryRouter.post("/create-repository", createRepository);
repositoryRouter.get("/fetch-repositories", getAllRepositories);
repositoryRouter.get("/fetch-repository/:id", fetchRepositoryById);
repositoryRouter.get("/fetch-repository/:name", fetchRepositoryByName);
repositoryRouter.get("/fetch-repositories/:user-id", fetchRepositoryForLoggedInUser);
repositoryRouter.put("/update-repository/:id",updateRepositoryById);
repositoryRouter.delete("/delete-repository/:id", deleteRepositoryById);
repositoryRouter.put("/update-visibility/:id", toggleVisibilityOfRepositoryById);

module.exports = repositoryRouter;
