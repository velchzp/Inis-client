import React from "react";
import style from "./Leader_Board.css";
import { Typography } from "@mui/material";
import { LeaderBoardPlayer } from "../../components/Leader_Board_Player";

export const LeaderBoard = () => {
  return (
    <div className="leader_board_wrapper">
      <div className="leader_board_parts">
        <div className="leader_boards_filters"></div>
        <div className="leader_boards">
          <Typography variant="h4" className="leader_board_tittle">
            LEADERBOARD
          </Typography>
          <div className="leader_board_labels">
            <Typography style={{ color: "#FF7600", fontWeight: "bold" }}>
              Rank
            </Typography>
            <Typography style={{ color: "#FF7600", fontWeight: "bold" }}>
              {" "}
              Nickname
            </Typography>
            <Typography style={{ color: "#FF7600", fontWeight: "bold" }}>
              Raiting
            </Typography>
            <Typography style={{ color: "#FF7600", fontWeight: "bold" }}>
              Winrate
            </Typography>
            <Typography style={{ color: "#FF7600", fontWeight: "bold" }}>
              Games
            </Typography>
          </div>
          <div className="leader_board_playeers">
            <LeaderBoardPlayer />
            <LeaderBoardPlayer />
            <LeaderBoardPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};
