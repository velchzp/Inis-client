import React, { useState } from "react";
import {
  TextField,
  Typography,
  Button,
  Divider,
  Checkbox,
} from "@mui/material";
import styles from "./Create_lobby_button.css";
import { Link } from "react-router-dom";

export const Create_lobby_button = () => {
  const [isPrivate, setIsPrivate] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsPrivate(event.target.checked);
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
        disabled={!isPrivate} // Disable when not private
        sx={{
          "& fieldset": { border: "none" },
          opacity: isPrivate ? 1 : 0.5, // Adjust opacity based on private state
        }}
      />
      <br />
      <Link to={"/create_lobby"}>
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
          Create Lobby
        </Button>
      </Link>
      <br />
    </div>
  );
};
