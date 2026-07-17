const fs = require("fs").promises; 
const path = require("path"); 
const { promisify } = require("util");

const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);

async function revertFile(CommitID){
    const repoPath = path.resolve(process.cwd(), ".apnaGit");
    const commitsPath = path.join(repoPath, "commits");

    try{
        const CommitDirectory = path.join(commitsPath, CommitID);
        const files = await readdir(CommitDirectory);
        const parentDirectory = path.resolve(repoPath, "..");

        for(const file of files){
            await copyFile(path.join(CommitDirectory, file), path.join(parentDirectory, file));
        };

        console.log(`Commit ${CommitID} reverted successfully!`);
    } catch(error) {
        console.error("Error; ", error);
    }
};

module.exports = { revertFile };