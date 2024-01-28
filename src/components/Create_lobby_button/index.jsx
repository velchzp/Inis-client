import React, { useState } from "react";
import { TextField, Typography, Button, Checkbox } from "@mui/material";
import styles from "./Create_lobby_button.css";
import { Link } from "react-router-dom";
import { socket } from "../../socket";

export const Create_lobby_button = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const [LobbyName, setLobbyName] = useState("");
  const [Password, setPassword] = useState("");

  const handleCheckboxChange = (event) => {
    setIsPrivate(event.target.checked);
  };
  const handleLobbyNameChange = (event) => {
    setLobbyName(event.target.value);
   
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    
  };

  const handleCreateLobbyButton = () => {
    if (!isPrivate) {
      socket.emit("create-lobby", {
        lobbyName: LobbyName,
        isPrivate: isPrivate,
      });
    } else {
      socket.emit("create-lobby", {
        lobbyName: LobbyName,
        isPrivate: isPrivate,
        password: Password,
      });
    }
  };
  return (
    <div>
      <Typography
        variant="h6"
        style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
      >
        Create Lobby
      </Typography>

      <Typography>Lobby Name</Typography>
      <TextField
        variant="outlined"
        size="small"
        className="Lobby_name_field"
        sx={{
          "& fieldset": { border: "none" },
        }}
        onChange={handleLobbyNameChange}
      />
      <br />
      <Typography style={{ display: "inline-block" }}>Private?</Typography>
      <Checkbox
        checked={isPrivate}
        onChange={handleCheckboxChange}
        style={{ padding: 0 }}
      />

      <Typography
        className="log_text"
        style={{ color: isPrivate ? "initial" : "gray" }}
      >
        Password
      </Typography>

      <TextField
        variant="outlined"
        size="small"
        className="log_field"
        type="password"
        disabled={!isPrivate}
        sx={{
          "& fieldset": { border: "none" },
          opacity: isPrivate ? 1 : 0.5,
        }}
        onChange={handlePasswordChange}
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
        onClick={handleCreateLobbyButton}
      >
        Create Lobby
      </Button>

      <br />
    </div>
  );
};
