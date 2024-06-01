// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//   console.log("App is running successfully");
// });

const express = require("express");
const app = express();

//load and config from rnv file
require("dotenv").config();
const PORT = process.env.PORT || 5000;

//middleware to prepare json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");
//mount the todo API routes
app.use("/api/v1", todoRoutes);

//start the server
app.listen(PORT, () => {
  console.log(`server started Successfully at ${PORT}`);
});

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req, res) => {
  res.send("<h1>This is homepage.</h1>");
});
