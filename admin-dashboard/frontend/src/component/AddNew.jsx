import { React, useState } from "react";
import "./LogIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Swal = require("sweetalert2");

function AddNew() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    department: "",
    birthday: "",
    joined: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4004/employee/addNew",
        {
          ...formData,
        }
      );
      if (response.status === 200 && response.data.status === "success") {
        Swal.fire({
          title: "Successfully Added",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate("/users");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(formData);
  return (
    <div>
      <div className="form-container">
        <form className="input-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Department:
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Day of Birthday:
            <input
              type="text"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Day of Joined:
            <input
              type="text"
              name="joined"
              value={formData.joined}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Salary:
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </label>
          <button className="button1" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNew;
