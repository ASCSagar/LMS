import React from "react";
import { Link } from "react-router-dom";

const LoginIndex = () => {
  return (
    <>
      <div className="headerarea__login">
        <Link to="login.html">
          <i className="icofont-user-alt-5"></i>
        </Link>
      </div>
    </>
  );
};

export default LoginIndex;
