import React from "react";
import styles from "./Lobby.css";
import { Typography, Input, Select, MenuItem, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Lobby = () => {
  return (
    <div className="lobby">
      <Typography style={{ color: "black", fontWeight: "bold" }}>
        Lobby1
      </Typography>
      <Typography style={{ color: "black", fontWeight: "bold" }}>
        {" "}
        3/4
      </Typography>
      <Typography style={{ color: "black", fontWeight: "bold" }}>
        Medium
      </Typography>
      <Typography style={{ color: "black", fontWeight: "bold" }}>Y</Typography>
      <Typography style={{ color: "black", fontWeight: "bold" }}>
        Status
      </Typography>
    </div>
  );
};
