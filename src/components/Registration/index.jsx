import React, { useState } from "react";
import styles from "./Registration.css";
import { TextField, Typography, Button, Divider } from "@mui/material";
import { Login } from "../Login";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

export const Registration = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      userName: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      return alert("Cant register with this data");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };
  if (isAuth) {
    window.location.reload();
  }
  const [showRegistration, setShowRegistration] = useState(false);

  const handleSignUpClick = () => {
    setShowRegistration(true);
  };

  const handleLogInClick = () => {
    setShowRegistration(false);
  };
  return (
    <div>
      {showRegistration ? (
        <Login onLogInClick={handleLogInClick} />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography
            variant="h6"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Register
          </Typography>
          <Typography>Username</Typography>
          <TextField
            {...register("userName", { required: true, minLength: 3 })}
            variant="outlined"
            size="small"
            className="log_field"
            sx={{
              "& fieldset": { border: "none" },
            }}
            helperText={
              errors.userName && "Username must be at least 3 characters"
            }
            error={Boolean(errors.userName)}
          ></TextField>
          <Typography className="log_text">Email</Typography>
          <TextField
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            variant="outlined"
            size="small"
            className="log_field"
            type="email"
            sx={{
              "& fieldset": { border: "none" },
            }}
          ></TextField>
          <Typography className="log_text">Password</Typography>
          <TextField
            {...register("password", { required: true, minLength: 7 })}
            variant="outlined"
            size="small"
            className="log_field"
            type="password"
            sx={{
              "& fieldset": { border: "none" },
            }}
            helperText={
              errors.password && "Password must be at least 7 characters"
            }
            error={Boolean(errors.password)}
          ></TextField>
          <br />
          <Button
            type="submit"
            className="log_button"
            variant="contained"
            disableElevation
            style={{
              width: 250,
              height: 20,
              backgroundColor: "#004FAB",
              padding: 5,
            }}
          >
            Register
          </Button>
          <br />
          <Button
            className="signup_button"
            disableElevation
            disableRipple
            onClick={handleSignUpClick}
          >
            {" "}
            Already have an account?
          </Button>
        </form>
      )}
    </div>
  );
};
