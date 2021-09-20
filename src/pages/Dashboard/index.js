import Cookies from 'js-cookie';
import React from 'react';
import Button from "../../components/Button";
function Dashboard() {
  const handleLogout = () => {
    Cookies.remove("name");
    window.location.replace("/");
  }
  return <div className="container h-100">
    <div className="row h-100 align-items-center justify-content-center">
      <div className="col">
        <div className="d-flex justify-content-center align-items-center flex-column ">
          <div>Hello <b>{Cookies.get("name")}</b></div>
          <Button text="Logout" classes="w-25" onClick={handleLogout} />
        </div>
      </div>
    </div>
    </div>;
}

export default Dashboard;
