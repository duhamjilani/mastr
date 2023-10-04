const express = require("express");
const AdminRoutes = require("./routes/AdminRoute");
const EmployeeRoutes = require("./routes/EmployeeRoute");
// const ReportRoutes = require("./routes/ReportRoute");
const cors=require('cors')
const app = express();

app.use(express.json());
app.use(cors())
//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/admin", AdminRoutes);
app.use("/employee", EmployeeRoutes);
// app.use("/employee/report", ReportRoutes);

module.exports = app;
