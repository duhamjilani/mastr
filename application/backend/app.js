const express = require("express");
const logInEmployee = require("./routes/LogInRoute");
const reportsRoutes = require("./routes/reportsRoutes");
const checkInOutRoutes = require("./routes/checkInOutRoutes");

const cors = require("cors");
const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use("/", logInEmployee); // Define your routes
app.use("/employees", reportsRoutes);
app.use("/employees", checkInOutRoutes);

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

module.exports = app;
