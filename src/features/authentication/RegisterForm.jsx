import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "../../ui/Button";
import "./Register.css";
import { useForm } from "react-hook-form";
import { useCreateUser } from "../users/useCreateUser";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const { createUser, isCreating } = useCreateUser();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data);
    navigate("/login");
  };

  //styles
  const labelStyles = {
    fontSize: "1.5rem",
  };

  const inputStyles = {
    fontSize: "1.5rem",
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <TextField
          label="First Name"
          variant="outlined"
          name="firstName"
          required
          InputProps={{
            style: inputStyles,
          }}
          InputLabelProps={{
            style: labelStyles,
          }}
          style={{ width: "100%" }}
          {...register("firstName")}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          name="lastName"
          required
          InputProps={{
            style: inputStyles,
          }}
          InputLabelProps={{
            style: labelStyles,
          }}
          style={{ width: "100%" }}
          {...register("lastName")}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          required
          InputProps={{
            style: inputStyles,
          }}
          InputLabelProps={{
            style: labelStyles,
          }}
          style={{ width: "100%" }}
          {...register("email")}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          required
          InputProps={{
            style: inputStyles,
          }}
          InputLabelProps={{
            style: labelStyles,
          }}
          style={{ width: "100%" }}
          {...register("password")}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          name="phoneNumber"
          required
          InputProps={{
            style: inputStyles,
          }}
          InputLabelProps={{
            style: labelStyles,
          }}
          style={{ width: "100%" }}
          {...register("phoneNumber")}
        />
        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: "#4f46e5", color: "white" }}
          disabled={isCreating}
        >
          Register
        </Button>
        <p className="signup-prompt">
          Alredy have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
