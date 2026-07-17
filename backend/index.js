const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { initRepo } = require("./controllers/init.js");
const { addFile } = require("./controllers/add.js");
const { commitFile } = require("./controllers/commit.js");
const { pullFile } = require("./controllers/pull.js");
const { pushFile } = require("./controllers/push.js");
const { revertFile } = require("./controllers/revert.js");

yargs(hideBin(process.argv))
  .command("init", "Initialise a new repository", {}, initRepo)
  .command(
    "add <file>",
    "Add a file to the repository",
    (yargs) => {
      yargs.positional("file", {
        describe: "File to add to the stagging area",
        type: "string",
      });
    },
    (argv) => {
      addFile(argv.file);
    },
  )
  .command(
    "commit <message>",
    "Commit the staged files",
    (yargs) => {
      yargs.positional("message", {
        describe: "Commit message",
        type: "string",
      });
    },
    (argv) => {
      commitFile(argv.message)
    },
  )
  .command("push", "Push commits to S3", {}, pushFile)
  .command("pull", "Pull commits from S3", {}, pullFile)
  .command("revert <CommitID>", "Revert to a specific commit", (yargs) => {
    yargs.positional("CommitID", {
        describe: "commit ID to revert to",
        type: "string"
    })
  }, revertFile)
  .demandCommand(1, "you need at least one command")
  .help().argv;
