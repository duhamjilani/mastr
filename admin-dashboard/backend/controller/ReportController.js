// const Employee = require('../models/Employee');

// const getAllReports = async (req, res) => {
//     try {
//       const employee = await Employee.findById(req.params.employeeId);
//       if (!employee) {
//         return res.status(404).json({ message: 'Employee not found' });
//       }

//       // Get all reports for the employee
//       const reports = employee.reports;

//       res.status(200).json(reports);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   };

//   module.exports = {
//     getAllReports,
//   };
