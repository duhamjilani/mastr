const jwt = require("jsonwebtoken");
const Employee = require("../model/EmployeeSchema");

// Create a new report for an employee
const createReport = async (req, res) => {
    debugger;
  try {
    const employee = await Employee.findById(req.params.employeeId);
    console.log("employee", employee);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const newReport = {
      reportType: req.body.reportType,
      reportDate: req.body.reportDate,
    };

    employee.reports.push(newReport);
    await employee.save();
    res.status(201).json(newReport);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Read all reports for an employee
const getAllReports = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee.reports);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update a report for an employee
const updateReport = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const report = employee.reports.id(req.params.reportId);
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    report.reportType = req.body.reportType || report.reportType;
    report.reportDate = req.body.reportDate || report.reportDate;

    await employee.save();
    res.status(200).json(report);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete a report for an employee
const deleteReport = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const report = employee.reports.id(req.params.reportId);
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    report.remove();
    await employee.save();
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createReport,
  getAllReports,
  updateReport,
  deleteReport,
};
