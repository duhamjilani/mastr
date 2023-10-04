const Employee = require("../model/EmployeeSchema");

//create new employee
exports.createEmployee = async (req, res) => {
  const { name, password, department, birthday, joined, salary } = req.body;
  console.log(password);
  try {
    const newEmployee = await Employee.create({
      name,
      password,
      department,
      birthday,
      joined,
      salary,
    });

    res.status(200).json({ status: "success", newEmployee });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

//get all employees

exports.getEmployees = async (req, res) => {
  const AllEmployee = await Employee.find({}).sort({ createdAt: -1 });
  try {
    res.status(200).json(AllEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

//get employee
exports.getOneEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const getOneEmployee = await Employee.findById(id);
    if (!getOneEmployee) {
      return res.status(404).json({ status: "no employee found" });
    }
    res.status(200).json({ data: getOneEmployee });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

//delete employee
exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteEmployee = await Employee.findOneAndDelete({ _id: id });
    if (!deleteEmployee) {
      return res.status(404).json({ status: "no employee found" });
    }
    res.status(200).json({ status: "deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

//update employee
exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const updateEmployee = await Employee.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    if (!updateEmployee) {
      return res.status(404).json({ status: "no employee found" });
    }
    res.status(200).json({ status: " successfully updated", updateEmployee });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

exports.addNewReport = async (req, res) => {
  console.log(req.body)
  const { employeeId, title, Date } = req.body;
  const obj = { reportType: title, reportDate: Date };
 
  try {
    const updateEmployee = await Employee.findById(employeeId)
    updateEmployee.reports.push(obj);
    await updateEmployee.save();
    res.status(201).json({
      data: updateEmployee,
      status: "success",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};
