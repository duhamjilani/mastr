const express = require("express");
const {
  createEmployee,
  getEmployees,
  getOneEmployee,
  deleteEmployee,
  updateEmployee,
  addNewReport
} = require("../controller/EmployeeController");

const router = express.Router();
router.post("/addNew", createEmployee);
router.get("/", getEmployees);
router.get("/:id", getOneEmployee);
router.delete("/:id", deleteEmployee);
router.patch("/:id", updateEmployee);
router.patch("/addNewReport", addNewReport);

module.exports = router;
