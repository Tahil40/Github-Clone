const AWS = require("aws-sdk");

AWS.config.update({region: "ap-south-1"});

const S3 = new AWS.S3();
const S3_BUCKET = "enterawss3buckenamehere";

module.exports = {S3, S3_BUCKET};