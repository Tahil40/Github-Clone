const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

async function commitFile(message) {
  const repoPath = path.resolve(process.cwd(), ".apnaGit");
  const staggedPath = path.join(repoPath, "staging");
  const commitPath = path.join(repoPath, "commits");

  try {
    const commitID = uuidv4();
    const commitDirectory = path.join(commitPath, commitID);
    await fs.mkdir(commitDirectory, { recursive: true });

    const files = await fs.readdir(staggedPath);
    for (const file of files) {
      await fs.copyFile(
        path.join(staggedPath, file),
        path.join(commitDirectory, file),
      );
    }

    await fs.writeFile(
      path.join(commitDirectory, "commit.json"),
      JSON.stringify({ message, date: new Date().toISOString() }),
    );

    console.log(`Commit ${commitID} created with message: ${message}`);
  } catch (error) {
    console.log("Error; ", error);
  }
}

module.exports = { commitFile };
