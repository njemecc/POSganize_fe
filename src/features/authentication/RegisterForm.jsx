import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "../../ui/Button";
import "./Register.css";
import { useForm } from "react-hook-form";
import { useCreateUser } from "../users/useCreateUser";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { readFileAsBlob } from "../../utils/helpers";
import SpinnerMini from "../../ui/SpinnerMini";

const RegisterForm = () => {
  const { createUser, status } = useCreateUser();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const onSubmit = async (data) => {
    const image = await readFileAsBlob(selectedFile);

    createUser({ ...data, image: Array.from(image) });
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
          type="number"
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
        <label
          htmlFor="avatarInput"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            textAlign: "center",
            padding: "0.5rem",
          }}
        >
          <Avatar src="" />
          {selectedFile && (
            <p style={{ fontSize: "1rem" }}>
              Selected file: {selectedFile.name}{" "}
            </p>
          )}
          <input
            id="avatarInput"
            type="file"
            accept=".jpg, .jpeg, .png, .gif"
            style={{
              display: "none",
            }}
            onChange={handleFileChange}
          />
        </label>
        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: "#4f46e5", color: "white" }}
          disabled={status === "pending"}
        >
          {status === "pending" ? <SpinnerMini /> : "Sign Up"}
        </Button>
        <p className="signup-prompt">
          Alredy have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
