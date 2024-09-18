import React from "react";
import withAuth from "./withAuth";
import withDarkMode from "./withDarkMode";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="auth-success">Your Dashboard</div>
      </div>
    </>
  );
};

const AuthDashboard = withDarkMode(withAuth(Dashboard));
export default AuthDashboard;
