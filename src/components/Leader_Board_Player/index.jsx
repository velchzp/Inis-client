import React from "react";
import { Typography } from "@mui/material";
import style from "./Leader_Board_Player.css";

export const LeaderBoardPlayer = (player) => {
  return (
    <div className="leader_board_player">
      <Typography
        style={{ color: "black", fontWeight: "bold" }}
        className="player_item"
      >
        #1
      </Typography>
      <Typography
        style={{ color: "black", fontWeight: "bold" }}
        className="player_item"
      >
        {" "}
        {player.userName}
      </Typography>
      <Typography
        style={{ color: "black", fontWeight: "bold" }}
        className="player_item"
      >
        {player.rating}
      </Typography>
      <Typography
        style={{ color: "black", fontWeight: "bold" }}
        className="player_item"
      >
        {player.winrate}
      </Typography>
      <Typography
        style={{ color: "black", fontWeight: "bold" }}
        className="player_item"
      >
        {player.totalGames}
      </Typography>
    </div>
  );
};
