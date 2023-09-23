import React, { useState } from "react";
import { TextField, Typography, Button, Divider } from "@mui/material";
import styles from "./Login.css";
import { Registration } from "../Registration";

export const Login = () => {
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
        <form action="">
          <Typography
            variant="h6"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Log In
          </Typography>
          <Typography>Username</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="log_field"
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
