import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './styles.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Signup() {





  const [userData, setUserData] = useState({
    Name: "",
    uEmail: "",
    uName: "",
    uPassword: "",
    uPassword2: ""
  });

  const [errors, setErrors] = useState({
    nameErr: "",
    emailErr: "",
    userNameErr: "",
    passwordErr: "",
    confirmPasswordErr: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const ChangeUserData = (e) => {
    if (e.target.name === "Name") {
      setUserData({
        ...userData,
        Name: e.target.value
      });

      setErrors({
        ...errors,
        nameErr: e.target.value.trim() === "" ? "Name is required" : ""
      });

    } else if (e.target.name === "uEmail") {
      setUserData({
        ...userData,
        uEmail: e.target.value
      });

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        emailErr: !emailPattern.test(e.target.value) ? "Please write a valid email" : ""
      });

    } else if (e.target.name === "uName") {
      setUserData({
        ...userData,
        uName: e.target.value
      });

      setErrors({
        ...errors,
        userNameErr: /\s/.test(e.target.value) ? "Username should not contain spaces" : ""
      });

    } else if (e.target.name === "uPassword") {
      setUserData({
        ...userData,
        uPassword: e.target.value
      });

      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      setErrors({
        ...errors,
        passwordErr: !passwordPattern.test(e.target.value) ? "Password must be at least 8 characters and contain an uppercase letter, a lowercase letter, and a digit" : ""
      });

    } else if (e.target.name === "uPassword2") {
      setUserData({
        ...userData,
        uPassword2: e.target.value
      });

      setErrors({
        ...errors,
        confirmPasswordErr: e.target.value !== userData.uPassword ? "Passwords do not match" : ""
      });
    }
  };

  return (
    <Form className="form-container">
      <h1 className="form-header">Sign Up</h1>

      <Form.Group className="mb-3 form-group" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="Name"
          placeholder="Enter Name"
          value={userData.Name}
          onChange={ChangeUserData}
        />
        <p className="text-danger">{errors.nameErr}</p>
      </Form.Group>

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

      <Form.Group className="mb-3 form-group" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="uName"
          placeholder="Enter Username"
          value={userData.uName}
          onChange={ChangeUserData}
        />
        <p className="text-danger">{errors.userNameErr}</p>
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
        <p className="text-danger">{errors.passwordErr}</p>
      </Form.Group>

      <Form.Group className="mb-3 form-group" controlId="formBasicPasswordConfirm">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type={showConfirmPassword ? "text" : "password"}
          name="uPassword2"
          placeholder="Confirm Password"
          value={userData.uPassword2}
          onChange={ChangeUserData}
        />
        <Button variant="link" onClick={handleToggleConfirmPassword}>
          {showConfirmPassword ? "Hide" : "Show"}
        </Button>
        <p className="text-danger">{errors.confirmPasswordErr}</p>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Signup;