const mongoose = require("mongoose");
const issueModel = require("../models/issueModel");

const createIssue = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const issue_model = new issueModel({
      title,
      description,
      repository: id,
    });

    const issue_save = await issue_model.save();

    res.status(201).json(issue_save);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Server Error");
  }
};

const getAllIssues = async (req, res) => {
  const {id} = req.params; 
  try {
    const issues_data = await issueModel.find({repository: id});
    if(!issues_data){
      return res.status(404).json({error: "Issues not found!"});
    };

    res.status(200).json(issues_data);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Server Error");
  }
};

const getIssueById = async (req, res) => {
  const { id } = req.params;
  try {
    const issue = await issueModel.findById(id);
    if(!issues_data){
      return res.status(404).json({error: "Issues not found!"});
    };

    res.json(issue);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Server Error");
  }
};

const updateIssueById = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  try {
    const issue = await issueModel.findById(id);
    if (!issue) {
      return res.status(404).json({ error: "Issue not found!" });
    }

    issue.title = title;
    issue.description = description;
    issue.status = status;

    const update_issue = await issue.save();
    res.json(update_issue, { message: "issue updated!" });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Server Error");
  }
};

const deleteIssueById = async (req, res) => {
  const { id } = req.params;
  try {
    const delete_issue = await issueModel.findByIdAndDelete(id);
    if (!delete_issue) {
      return res.status(404).json({ message: "issue not found!" });
    }
    res.json({ message: "Issue deleted!" });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  createIssue,
  getAllIssues,
  getIssueById,
  updateIssueById,
  deleteIssueById,
};
