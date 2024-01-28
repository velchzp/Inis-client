import React, { useState } from "react";
import { TextField, Typography, Button, Checkbox } from "@mui/material";

import { Link } from "react-router-dom";
import { socket } from "../../socket";
import axios from "../../axios.js";

export const Change_password_button = () => {
  const [NewPassword, setNewPassword] = useState("");
  const [Password, setPassword] = useState("");

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleChangePasswordButton = () => {
   
    axios
      .patch("http://localhost:4444/users/me/pass", {
        password: Password,
        newPassword: NewPassword,
      })
      .then((response) => {
        console.log("User updated successfully:", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };
  return (
    <div>
      <Typography
        variant="h6"
        style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
      >
        Change password
      </Typography>

      <Typography>Password</Typography>
      <TextField
        variant="outlined"
        size="small"
        className="Lobby_name_field"
        sx={{
          "& fieldset": { border: "none" },
        }}
        onChange={handlePasswordChange}
      />
      <br />

      <Typography className="log_text" style={{}}>
        New Password
      </Typography>

      <TextField
        variant="outlined"
        size="small"
        className="log_field"
        type="password"
        sx={{
          "& fieldset": { border: "none" },
        }}
        onChange={handleNewPasswordChange}
      />
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
        onClick={handleChangePasswordButton}
      >
        Change Password
      </Button>

      <br />
    </div>
  );
};
