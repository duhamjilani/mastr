import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Chart from "chart.js/auto";

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Salary",
        data: [0, 0, 0, 0, 0],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };
  const [chartData, setChartData] = useState(data);
  const chartRef = useRef(null);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4004/employee", {
        headers: {
          "Content-Type": "application/json",
          // Add any required authentication headers here
        },
      });

      if (response.status === 200) {
        const employeeData = response.data;
        const departments = employeeData.map((employee) => employee.salary);
        const names = employeeData.map((employee) => employee.name);

        const lineData = {
          labels: names,
          datasets: [
            {
              label: "Salary",
              data: departments,
              fill: false,
              borderColor: "rgba(75, 192, 192, 1)",
            },
          ],
        };
        setChartData(lineData);
        // Destroy the previous chart if it exists
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        // Create a new chart
        // const ctx = document.getElementById("myChart");
        // const newChart = new Chart(ctx, {
        //   type: "line",
        //   data: {
        //     labels: departments,
        //     datasets: [
        //       {
        //         label: "Department Data",
        //         data: values,
        //         backgroundColor: "rgba(75, 192, 192, 0.2)",
        //         borderColor: "rgba(75, 192, 192, 1)",
        //         borderWidth: 1,
        //       },
        //     ],
        //   },
        //   options: {
        //     maintainAspectRatio: false,
        //     scales: {
        //       x: {
        //         type: "category", // Use 'category' scale for labels
        //       },
        //     },
        //     plugins: {
        //       legend: {
        //         labels: {
        //           fontSize: 16,
        //         },
        //       },
        //     },
        //   },
        // });

        // setChartData(newChart);
      } else {
        console.error("API request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {chartData ? (
        <div className="line-chart  w-[80vw] mx-auto">
          <Line data={chartData} options={options} />
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default LineChart;
