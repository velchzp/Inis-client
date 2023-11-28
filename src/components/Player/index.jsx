import React from "react";
import { Typography, Select, MenuItem } from "@mui/material";
import style from "./Player.css";
import { useState } from "react";

export const Player = (player) => {
  const [color, setColor] = useState("blue");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <div className="Player_wrapper">
        <div className="username_stack">
          <Typography className="username">{player.userName}</Typography>
          {player.isReady ? (
            <Typography className="username" style={{ color: "orange" }}>
              Ready
            </Typography>
          ) : (
            <Typography className="username" style={{ color: "gray" }}>
              Ready
            </Typography>
          )}
        </div>
        <Select
          value={color}
          onChange={handleColorChange}
          className="numplayers"
          size="small"
        >
          <MenuItem value={"blue"}>
            <Typography style={{ color: "blue" }}>blue</Typography>
          </MenuItem>
          <MenuItem value={"red"}>
            <Typography style={{ color: "red" }}>red</Typography>
          </MenuItem>
          <MenuItem value={"green"}>
            <Typography style={{ color: "green" }}>green</Typography>
          </MenuItem>
        </Select>
      </div>
    </div>
  );
};
