import React from "react";
import { Typography, Button } from "@mui/material";
import "./AccountSettings.css";

export const AccountSettings = () => {
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
        >
          <Typography>Change password</Typography>
        </Button>
      </div>
    </div>
  );
};
