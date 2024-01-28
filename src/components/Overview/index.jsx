import React from "react";
import { Typography, Button, Stack } from "@mui/material";
import { useSelector } from "react-redux";

export const Overview = () => {
  const MeInfo = useSelector((state) => state.auth);
  return (
    <div className="overview_wrapper">
      <div className="overview_menu">
        <Typography variant="h4">Overview</Typography>
        <div style={{ display: "flex" }}>
          <Typography
            style={{
              color: "orange",
              fontSize: 30,
              marginLeft: 10,
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Win rate:
          </Typography>

          <Typography
            style={{
              color: "black",
              fontSize: 30,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            {MeInfo?.data?.user?.totalGames}%
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography
            style={{
              color: "orange",
              fontSize: 30,
              marginLeft: 10,
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Total games:
          </Typography>

          <Typography
            style={{
              color: "black",
              fontSize: 30,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            {MeInfo?.data?.user?.totalGames}%
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography
            style={{
              color: "orange",
              fontSize: 30,
              marginLeft: 10,
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Wins:
          </Typography>

          <Typography
            style={{
              color: "black",
              fontSize: 30,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            {MeInfo?.data?.user?.wins}
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography
            style={{
              color: "orange",
              fontSize: 30,
              marginLeft: 10,
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Rating:
          </Typography>

          <Typography
            style={{
              color: "black",
              fontSize: 30,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            {MeInfo?.data?.user?.rating}
          </Typography>
        </div>
      </div>
    </div>
  );
};
