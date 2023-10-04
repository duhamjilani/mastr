const express = require("express");
const router = express.Router();
const Employee = require("../model/EmployeeSchema");

// Create a new check-in entry for an employee
router.post("/:employeeId/checkIn", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const checkInTime = new Date().toISOString(); // Get the current timestamp
    employee.checkIn.push(checkInTime);
    await employee.save();

    res.status(201).json({ message: "Check-in recorded", checkInTime });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Create a new check-out entry for an employee
router.post("/:employeeId/checkOut", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const checkOutTime = new Date().toISOString(); // Get the current timestamp
    employee.checkOut.push(checkOutTime);
    await employee.save();

    res.status(201).json({ message: "Check-out recorded", checkOutTime });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
