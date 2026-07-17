const fs = require("fs").promises;
const path = require("path"); 
const {S3, S3_BUCKET} = require("../config/aws-config");

async function pushFile(){
    const repoPath = path.resolve(process.cwd(), ".apnaGit");
    const commitPath = path.join(repoPath, "commits");

    try{
        
    } catch (error) {
        console.error("Error; ", error);
    }
};

module.exports = { pushFile };