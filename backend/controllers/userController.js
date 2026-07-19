const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();
const mongodb_uri = process.env.MONGODB_URI;
let client;

async function connectToMongoDB() {
  if (!client) {
    client = new MongoClient(mongodb_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
  }
}

const getAllUsers = (req, res) => {};

const signUP = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    await connectToMongoDB();
    const mongodb_db = client.db("GithubDatabase");
    const user_collection = mongodb_db.collection("user");

    const user = await user_collection.findOne({ username });

    if(user){
      return res.status(400).json({message: "user already exists!"});
    }; 

    const generate_salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, generate_salt);

    const user_object = {
      username, 
      email, 
      password: hashed_password,
      repositories: [], 
      followedUser: [], 
      starRepository: [], 
    };

    const result = await user_collection.insertOne(user_object);
    const token = jwt.sign({id: result.insertId}, process.env.JWT_SECRET);
    res.send(token);
  } catch (error) {
    console.error("Error; ", error);
    res.status(500).send("Server Error");
  };
};

const login = (req, res) => {
  
};

const getUserProfile = (req, res) => {};

const updateUserProfile = (req, res) => {};

const deleteUserProfile = (req, res) => {};

module.exports = {
  getAllUsers,
  signUP,
  login,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
