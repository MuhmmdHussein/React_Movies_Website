import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './styles.css'; 
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function LoginForm() {


  
  const [userData, setUserData] = useState({
    uEmail: "mohamed@yahoo.com",
    uPassword: "12345"
  });

  const [errors, setErrors] = useState({
    emailErr: "",
    passErr: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const ChangeUserData = (e) => {
    if (e.target.name === "uEmail") {
      setUserData({
        ...userData,
        uEmail: e.target.value
      });

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        emailErr: !emailPattern.test(e.target.value) ? "Please write a valid email" : ""
      });

    } else if (e.target.name === "uPassword") {
      setUserData({
        ...userData,
        uPassword: e.target.value
      });

      setErrors({
        ...errors,
        passErr: e.target.value.length < 2 ? "Please enter a valid password" : ""
      });
    }
  };

  return (
    <Form className="form-container">
      <h1 className="form-header">Login</h1>

      <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="uEmail"
          placeholder="Enter email"
          value={userData.uEmail}
          onChange={ChangeUserData}
        />
        <p className="text-danger">{errors.emailErr}</p>
      </Form.Group>

      <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type={showPassword ? "text" : "password"}
          name="uPassword"
          placeholder="Password"
          value={userData.uPassword}
          onChange={ChangeUserData}
        />
        <Button variant="link" onClick={handleTogglePassword}>
          {showPassword ? "Hide" : "Show"}
        </Button>
        <p className="text-danger">{errors.passErr}</p>
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;