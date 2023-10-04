
const jwt = require("jsonwebtoken");
const Employee = require("../model/EmployeeSchema");

// Function to create a JWT token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "2d" });
};

exports.logInEmployee = async (req, res) => {
  const { name, password } = req.body;
  
  try {
    if (!name || !password) {
      // throw Error ( "fill name or password");
      return res.status(401).json({ status: "failed" ,error:"fill password or name"});
      
    }
    const currentUser = await Employee.findOne({ name });
   
    if (!currentUser) {
      return res.status(401).json({ status: "failed" });
    }
    
    const match =(currentUser.password===password );
  
    if (!match) {
      return res.status(401).json({ status: "failedPassword" });
    }
    
    
    const token = createToken(currentUser._id);
    res.status(200).json({ status: "success", token,currentUser });
  } catch (error) {
    res.status(400).json({ error });
    console.log(error);
  }
};
