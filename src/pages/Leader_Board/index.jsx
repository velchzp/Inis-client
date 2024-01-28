import React from "react";
import style from "./Leader_Board.css";
import { Typography } from "@mui/material";
import { LeaderBoardPlayer } from "../../components/Leader_Board_Player";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeaderBoard } from "../../redux/slices/leaderboard";
import { useEffect } from "react";
export const LeaderBoard = () => {
  const leaderboard = useSelector((state) => state.leaderboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeaderBoard());
  }, [dispatch]);

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
            {leaderboard.data ? (
              leaderboard.data
                .slice(0, 4)
                .map((player, index) =>
                  player.userName ? (
                    <LeaderBoardPlayer
                      key={index}
                      player={player}
                      index={index}
                    />
                  ) : (
                    <div key={index}>Player data incomplete</div>
                  )
                )
            ) : (
              <div>Waiting for lobby data...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
