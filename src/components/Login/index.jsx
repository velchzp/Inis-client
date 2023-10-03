import React, { useState } from "react";
import { TextField, Typography, Button, Divider } from "@mui/material";
import styles from "./Login.css";
import { Registration } from "../Registration";
import { useSelector, useDispatch } from "react-redux";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";
import { useForm } from "react-hook-form";

export const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert("Cant log in with this data!");
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
        <Registration onLogInClick={handleLogInClick} />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography
            variant="h6"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Log In
          </Typography>
          <Typography>Email</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="log_field"
            {...register("email")}
            sx={{
              "& fieldset": { border: "none" },
            }}
          ></TextField>
          <Typography className="log_text">Password</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="log_field"
            type="password"
            {...register("password")}
            sx={{
              "& fieldset": { border: "none" },
            }}
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
            Login
          </Button>
          <br />
          <Button
            className="signup_button"
            disableElevation
            disableRipple
            onClick={handleSignUpClick}
          >
            {" "}
            Sign Up
          </Button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ flexGrow: 1 }}>
              <hr
                style={{ borderTop: "1px solid white", marginRight: "10px" }}
              />
            </div>
            <span style={{ color: "white", fontWeight: "bold" }}>
              or login with
            </span>
            <div style={{ flexGrow: 1 }}>
              <hr
                style={{ borderTop: "1px solid white", marginLeft: "10px" }}
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
