import React, { useState } from "react";
import { TextField, Typography, Button, Checkbox } from "@mui/material";
import styles from "./Change_nickname_button.css";
import axios from "../../axios.js";

export const Change_nickmane_button = () => {
  const [UserName, setUserName] = useState("");
  const handleUsernameField = (event) => {
    setUserName(event.target.value);
  };
  const handleUsernameButton = () => {
    console.log(UserName);
    axios
      .patch("http://localhost:4444/users/me", {
        userName: UserName,
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
        Change nickname
      </Typography>

      <Typography>New Username</Typography>
      <TextField
        variant="outlined"
        size="small"
        className="Lobby_name_field"
        sx={{
          "& fieldset": { border: "none" },
        }}
        onChange={handleUsernameField}
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
        onClick={handleUsernameButton}
      >
        Change Username
      </Button>

      <br />
    </div>
  );
};
