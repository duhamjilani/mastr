import React, { useState, useEffect, useRef } from "react";
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";
import Chart from "chart.js/auto";

const EmployeeLineChart = () => {
  const [showUsers, setShowUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4004/employee");
      const reversedUsers = response.data;
      console.log(reversedUsers);
      setShowUsers(reversedUsers);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Initialize an object to store report counts by date
  const reportCountsByDate = {};

  // Iterate through each employee and their reports
  showUsers.forEach((employee) => {
    employee.reports.forEach((report, idx) => {
      const reportDate = new Date(parseInt(report.reportDate));
      const formattedDate = reportDate.toLocaleDateString();
      console.log(report, formattedDate);
      if (reportCountsByDate[formattedDate]) {
        reportCountsByDate[formattedDate]++;
      } else {
        reportCountsByDate[formattedDate] = 1;
      }
    });
  });
  // Extract the dates and report counts from the object
  const dates = Object.keys(reportCountsByDate);
  const reportCounts = Object.values(reportCountsByDate);

  // Define the chart data
  const data = {
    labels: dates,
    datasets: [
      {
        label: "Report Counts",
        data: reportCounts,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="">
      {showUsers ? (
        <div className="line-chart w-[80vw] mx-auto">
          <Bar data={data} options={options} />
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default EmployeeLineChart;
