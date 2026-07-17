const fs = require("fs").promises;
const path = require("path"); 
const {S3, S3_BUCKET} = require("../config/aws-config");

async function pushFile(){
    const repoPath = path.resolve(process.cwd(), ".apnaGit");
    const commitsPath = path.join(repoPath, "commits");

    try{
        const commitDirectories = await fs.readdir(commitsPath);
        for(const commitDirectory of commitDirectories){
            const commitPath = path.join(commitsPath, commitDirectory);
            const files = await fs.readdir(commitPath);

            for(const file of files){
                const filePath = path.join(commitPath, file);
                const fileContent = await fs.readFile(filePath);
                const params = {
                    Bucket: S3_BUCKET,
                    key: `commits/${commitDirectories}/${file}`, 
                    Body: fileContent,
                };
                
                await S3.upload(params).promise();
            };
        };

        console.log("All commits pushed to S3.");
    } catch (error) {
        console.error("Error; ", error);
    }
};

module.exports = { pushFile };