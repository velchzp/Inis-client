import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import React from "react";
import style from "./History.css";

export const History = () => {
  const MeInfo = useSelector((state) => state.auth);
  console.log("History", MeInfo?.data?.games);
  const formatCreatedAt = (createdAtString) => {
    const createdAtDate = new Date(createdAtString);

    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };

    return createdAtDate.toLocaleDateString("en-GB", options);
  };

  return (
    <div className="history_wrapper">
      <Typography variant="h4">Game history</Typography>
      <div className="history">
        <Typography
          className="history_text"
          style={{ color: "orange", fontWeight: "bold" }}
        >
          Data
        </Typography>
        <Typography
          className="history_text"
          style={{ color: "orange", fontWeight: "bold" }}
        >
          {" "}
          Duration
        </Typography>
        <Typography
          className="history_text"
          style={{ color: "orange", fontWeight: "bold" }}
        >
          Rounds
        </Typography>
        <Typography
          className="history_text"
          style={{ color: "orange", fontWeight: "bold" }}
        >
          Result
        </Typography>
        <Typography
          className="history_text"
          style={{ color: "orange", fontWeight: "bold" }}
        >
          Ranked
        </Typography>
        <Typography
          className="history_text"
          style={{ color: "orange", fontWeight: "bold" }}
        >
          N.players
        </Typography>
      </div>
      {MeInfo?.data?.games ? (
        MeInfo?.data?.games.slice(0, 4).map((game, index) => (
          <div className="history">
            <Typography className="history_text">
              {formatCreatedAt(game.createdAt)}
            </Typography>
            <Typography className="history_text">{game.duration}</Typography>
            <Typography className="history_text">{game.rounds}</Typography>
            {MeInfo && MeInfo.data.user._id == game.winner ? (
              <Typography className="history_text">W</Typography>
            ) : (
              <Typography className="history_text">L</Typography>
            )}
            <Typography className="history_text">
              {game.ranked == true ? "T" : "F"}
            </Typography>

            <Typography className="history_text">
              {game.numberOfPlayers}
            </Typography>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};
