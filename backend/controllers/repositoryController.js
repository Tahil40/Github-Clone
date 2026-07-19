const mongoose = require("mongoose");
const repositoryModel = require("../models/repositoryModel");
const userModel = require("../models/userModel");
const issueModel = require("../models/issueModel");

const createRepository = async (req, res) => {
  const { owner, name, content, description, visibility, issues } = req.body;
  try {
    if (!name) {
      return res.status(400).json({ error: "Repository name is required!" });
    }

    if (!mongoose.Types.ObjectId.isValid(owner)) {
      return res.status(400).json({ error: "Invalid user ID!" });
    }

    if (!mongoose.Types.ObjectId.isValid(issues)) {
      return res.status(400).json({ error: "Invalid user ID!" });
    }

    const newRepository = new repositoryModel({
      name,
      description,
      content,
      owner,
      visibility,
      issues,
    });

    const result = await newRepository.save();
    res
      .status(201)
      .json({ message: "Repository created!", repositoryId: result._id });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Server Error");
  };
};

const getAllRepositories = (req, res) => {
  try {
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Server Error");
  }
};

const fetchRepositoryById = (req, res) => {
  try {
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Server Error");
  }
};

const fetchRepositoryByName = (req, res) => {
  try {
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Server Error");
  }
};

const fetchRepositoryForLoggedInUser = (req, res) => {
  try {
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Server Error");
  }
};

const updateRepositoryById = (req, res) => {
  try {
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Server Error");
  }
};

const deleteRepositoryById = (req, res) => {
  try {
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Server Error");
  }
};

const toggleVisibilityOfRepositoryById = (req, res) => {
  try {
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  createRepository,
  getAllRepositories,
  fetchRepositoryById,
  fetchRepositoryByName,
  fetchRepositoryForLoggedInUser,
  updateRepositoryById,
  deleteRepositoryById,
  toggleVisibilityOfRepositoryById,
};
