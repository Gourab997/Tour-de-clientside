import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div>
      <div className='container login'>
        <h3>SignIn Using</h3>
        <Button className='login-button m-3' onClick={handleGoogleLogin}>
          {" "}
          <i className='fab fa-google '></i> Continue With Google{" "}
        </Button>
      </div>
    </div>
  );
};

export default Login;
