import React from "react";
import { Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";

export const Overview = () => {
  const MeInfo = useSelector((state) => state.auth);
  return (
    <div className="overview_wrapper">
      <div className="overview_menu">
        <Typography variant="h4">Overview</Typography>
        <Typography
          style={{
            color: "white",
            fontSize: 30,
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Win rate: {MeInfo?.data?.user?.winrate}%
        </Typography>
        <Typography
          style={{
            color: "white",
            fontSize: 30,
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Total game: {MeInfo?.data?.user?.totalGames}
        </Typography>
        <Typography
          style={{
            color: "white",
            fontSize: 30,
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Wins: {MeInfo?.data?.user?.wins}
        </Typography>
        <Typography
          style={{
            color: "white",
            fontSize: 30,
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Rating: {MeInfo?.data?.user?.rating}
        </Typography>
      </div>
    </div>
  );
};
