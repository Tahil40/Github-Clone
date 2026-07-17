const fs = require("fs").promises;
const path = require("path");

async function addFile(filePath){
    const repoPath = path.resolve(process.cwd(), ".apnaGit");
    const staggingPath = path.join(repoPath, "staging");

    try{
        await fs.mkdir(staggingPath, {recursive: true});
        const fileName = path.basename(filePath);
        await fs.copyFile(filePath, path.join(staggingPath, fileName));
        console.log(`File ${fileName} added to the staging area!`);
    } catch (error) {
        console.log("Error; ", error);
    }
};

module.exports = { addFile };