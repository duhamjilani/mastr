const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
  },
  joined: {
    type: String,
  },
  salary: {
    type: String,
  },
  reports: [
    {
      reportType: String,
      reportDate: String, 
    },
  ],
  checkIn: [
    {
      type: String,
      
    },
  ],
  checkOut: [
    {
      type: String,
      
    },
  ],
});
module.exports = mongoose.model("Employee", EmployeeSchema);
