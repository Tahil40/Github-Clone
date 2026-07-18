const mongooose = require("mongoose");
const {Schema} = mongooose; 

const repositorySchema = new Schema({
    name: {
        type: String, 
        required: true, 
        unique: true,
    }, 
    description: {
        type: String, 
    }, 
    content: [
        {
            type: String, 
        }, 
    ], 
    visibility: {
        type: Boolean, 
    }, 
    owner: {
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true, 
    },
    issues: [
        {
            type: Schema.Types.ObjectId, 
            ref: "Issue", 
        },
    ],
});

const repositoryModel = mongooose.model("Repository", repositorySchema);
module.exports = repositoryModel;