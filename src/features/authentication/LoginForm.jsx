import "./LoginForm.css";
import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
function LoginForm() {
  const [email, setEmail] = useState("admin@email.com");
  const [password, setPassword] = useState("admin1234");

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  //styles
  const labelStyles = {
    fontSize: "1.5rem",
  };

  const inputStyles = {
    fontSize: "1.5rem",
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            InputProps={{
              style: inputStyles,
            }}
            InputLabelProps={{
              style: labelStyles,
            }}
            style={{ width: "100%" }}
          />
        </div>
        <div className="form-group">
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            InputProps={{
              style: inputStyles,
            }}
            InputLabelProps={{
              style: labelStyles,
            }}
            style={{ width: "100%" }}
          />
        </div>

        <div className="button-wrapper">
          <Button
            type="submit"
            className="custom-button"
            size="large"
            disabled={isLoading}
          >
            {!isLoading ? "Log in" : <SpinnerMini />}{" "}
          </Button>
        </div>
        <p className="signup-prompt">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
