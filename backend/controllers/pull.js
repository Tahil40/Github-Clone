const fs = require("fs").promises;
const path = require("path"); 
const {S3, S3_BUCKET} = require("../config/aws-config");

async function pullFile(){
    const repoPath = path.resolve(process.cwd(), ".apnaGit");
    const commitPath = path.join(repoPath, "commits");

    try{
        const data = await S3.listObjectsV2({
            Bucket: S3_BUCKET, 
            Prefix: "commits/",
        }).promise();

        const Objects = data.Contents;

        for(const object of Objects){
            const key = object.Key; 
            const commitDirectory = path.join(commitPath, path.dirname(key).split("/").pop());

            await fs.mkdir(commitDirectory, {recursive: true});

            const params = {
                Bucket: S3_BUCKET, 
                Key: key,
            };

            const fileContent = await S3.getObject(params).promise();
            await fs.writeFile(path.join(repoPath, key), fileContent);

            console.log("All commits pulled from S3.");
        };
    } catch (error){
        console.log("Error; ", error);
    }
};

module.exports = { pullFile };