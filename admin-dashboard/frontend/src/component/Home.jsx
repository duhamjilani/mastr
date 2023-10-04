import React from "react";
import LineChart from "./LineChart";
import EmployeeLineChart from "./EmployeeLineChart";
function Home() {
  return (
    <div className="grid gird-cols-2 bg-red">
      <LineChart />
      <EmployeeLineChart />
    </div>
  );
}

export default Home;
