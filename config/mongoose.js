// get the library
import mongoose from "mongoose";

// MongoDB Atlas connection string
const atlasConnection =
  "mongodb+srv://GyashuRahman:yt26RB6r3DrAzvD4@cluster0.tzsrmro.mongodb.net/?retryWrites=true&w=majority";

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
