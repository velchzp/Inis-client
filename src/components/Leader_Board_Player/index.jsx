import React from "react";
import { Typography } from "@mui/material";
import style from "./Leader_Board_Player.css";

export const LeaderBoardPlayer = () => {
  return (
    <div className="leader_board_player">
      <Typography style={{ color: "black", fontWeight: "bold" }}>#1</Typography>
      <Typography style={{ color: "black", fontWeight: "bold" }}>
        {" "}
        Player1
      </Typography>
      <Typography style={{ color: "black", fontWeight: "bold" }}>
        322
      </Typography>
      <Typography style={{ color: "black", fontWeight: "bold" }}>
        65%
      </Typography>
      <Typography style={{ color: "black", fontWeight: "bold" }}>
        200
      </Typography>
    </div>
  );
};
