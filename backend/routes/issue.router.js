const express = require("express");
const issueRouter = express.Router();
const {
  createIssue,
  getAllIssues,
  getIssueById,
  updateIssueById,
  deleteIssueById,
} = require("../controllers/issueController");

issueRouter.post("/create_issue", createIssue);
issueRouter.get("/get-issues", getAllIssues);
issueRouter.get("/get-issue/:id", getIssueById);
issueRouter.put("/update-issue/:id", updateIssueById);
issueRouter.delete("/delete-issue/:id", deleteIssueById);

module.exports = issueRouter;