// get the library
import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();
// MongoDB Atlas connection string
const atlasConnection =String(process.env.MONGO_KEY);
  console.log(atlasConnection);

// connect the database
mongoose.connect(atlasConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// error
db.on("error", console.error.bind(console, "error connecting to db"));

// up and running then print the message
db.once("open", function () {
  console.log("successfully connect to the database");
});

export default db;
