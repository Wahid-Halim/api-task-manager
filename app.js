const express = require("express");
const app = express();
const taskRouter = require("./routes/task");

// .env package
require("dotenv").config();
// db connect
const connectDB = require("./db/connect");

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", taskRouter);

const PORT = 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(5000, () => {
      console.log("server is running on port " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
