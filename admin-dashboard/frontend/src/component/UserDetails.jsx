import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./UserDetails.css";

function UserDetails() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4004/employee/${userId}`)
      .then((response) => {
        console.log(response.data.data);
        setUser(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [userId]);

  return (
    <div className="user-details-container">
      {user && (
        <div className="user-details">
          <h1 className="user-name">{user.name}</h1>
          <div className="user-info">
            <p className="user-item">
              <span className="user-label">Password:</span> {user.password}
            </p>
            <p className="user-item">
              <span className="user-label">Salary:</span> {user.salary}
            </p>
            <p className="user-item">
              <span className="user-label">Department:</span> {user.department}
            </p>
            <p className="user-item">
              <span className="user-label">Joined:</span> {user.joined}
            </p>
            <p className="user-item">
              <span className="user-label">Birthday</span> {user.birthday}
            </p>
            <p className="user-item">
              <span className="user-label">Reports:</span>
            </p>
            <div>
              {!!user.reports &&
                user.reports.map((reportPost) => {
                  return (
                    <div key={reportPost.reportDate}>
                      <p className="user-label border-top p-20">
                        report Type:{" "}
                        <span className="text-green">
                          {reportPost.reportType}
                        </span>
                      </p>
                      <p className="user-label p-20">
                        report Date & Time:{" "}
                        <span className="text-green">
                          {Date(reportPost.reportDate).toString()}
                        </span>
                      </p>
                    </div>
                  );
                })}
            </div>
            <p className="user-item">
              <span className="user-label">checkIn:</span>
            </p>
            <div>
              {!!user.checkIn &&
                user.checkIn.map((checkInPost) => {
                  return (
                    <div key={checkInPost.type}>
                      <p className="user-label border-top p-20">
                        checkIn Date:{" "}
                        <span className="text-green">
                          {Date(checkInPost.type).toString()}
                        </span>
                      </p>
                    </div>
                  );
                })}
            </div>
            <p className="user-item">
              <span className="user-label">checkOut:</span>
            </p>
            <div>
              {!!user.checkOut &&
                user.checkOut.map((checkOutPost) => {
                  return (
                    <div key={checkOutPost.type}>
                      <p className="user-label border-top p-20">
                        checkOut Date:{" "}
                        <span className="text-green">
                          {Date(checkOutPost.type).toString()}
                        </span>
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
