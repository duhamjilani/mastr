const express = require('express');
const router = express.Router();
const reportsController = require('../controller/reportsController');

// Create a new report for an employee
router.post('/:employeeId/reports', reportsController.createReport);

// Read all reports for an employee
router.get('/:employeeId/reports', reportsController.getAllReports);

// Update a report for an employee
router.put('/:employeeId/reports/:reportId', reportsController.updateReport);

// Delete a report for an employee
router.delete('/:employeeId/reports/:reportId', reportsController.deleteReport);

module.exports = router;
