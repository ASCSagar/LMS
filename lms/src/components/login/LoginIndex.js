import React from "react";
import { Link } from "react-router-dom";

const LoginIndex = () => {
  return (
    <>
      <div class="headerarea__login">
        <Link to="login.html">
          <i class="icofont-user-alt-5"></i>
        </Link>
      </div>
    </>
  );
};

export default LoginIndex;
