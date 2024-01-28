import React, { useState } from "react";
import { TextField, Typography, Button, Checkbox } from "@mui/material";
import { Change_nickmane_button } from "../Change_nickname_button/index.jsx";
import CloseIcon from "@mui/icons-material/Close";
import { Change_password_button } from "../Change_password_button/index.jsx";

import axios from "../../axios.js";
import "./AccountSettings.css";

export const AccountSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPass, setIsOpenPass] = useState(false);

  const handleCreateLobbyButtonClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleChangePassOpen = () => {
    setIsOpenPass(true);
  };
  const handleChangePassClose = () => {
    setIsOpenPass(false);
  };
  return (
    <div className="accountset_wrapper">
      <div className="accountset_menu">
        <Typography variant="h4">Account settings</Typography>
        <Button
          variant="contained"
          style={{ marginTop: 20, backgroundColor: "#FF7600" }}
        >
          <Typography>Avatar</Typography>
        </Button>
        <Button
          variant="contained"
          style={{ marginTop: 10, backgroundColor: "#FF7600" }}
        >
          <Typography>Prefered colour</Typography>
        </Button>
        <Button
          variant="contained"
          style={{ marginTop: 10, backgroundColor: "#FF7600" }}
        >
          <Typography>Units</Typography>
        </Button>
        <Button
          variant="contained"
          style={{ marginTop: 10, backgroundColor: "#FF7600" }}
        >
          <Typography>Preferences</Typography>
        </Button>
        <Button
          variant="contained"
          style={{ marginTop: 10, backgroundColor: "#FF0000" }}
          onClick={handleCreateLobbyButtonClick}
        >
          <Typography>Change Username</Typography>
        </Button>
        <Button
          variant="contained"
          style={{ marginTop: 10, backgroundColor: "#FF0000" }}
          onClick={handleChangePassOpen}
        >
          <Typography>Change password</Typography>
        </Button>
      </div>
      {isOpen && (
        <div className="overlay">
          <div className="createlobby">
            <Button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "#FF7600",
              }}
            >
              <CloseIcon />
            </Button>
            <Change_nickmane_button></Change_nickmane_button>
          </div>
        </div>
      )}
      {isOpenPass && (
        <div className="overlay">
          <div className="createlobby">
            <Button
              onClick={handleChangePassClose}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "#FF7600",
              }}
            >
              <CloseIcon />
            </Button>
            <Change_password_button></Change_password_button>
          </div>
        </div>
      )}
    </div>
  );
};
