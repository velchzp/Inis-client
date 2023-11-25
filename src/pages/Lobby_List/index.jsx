import React from "react";
import style from "./Lobby_List.css";
import { Player } from "../../components/Player";
import { Typography, Input, Select, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import { Lobby } from "../../components/Lobby";
import { Link } from "react-router-dom";

export const LobbyList = () => {
  return (
    <div className="lobby_list_wrapper">
      <div className="lobby_list_parts">
        <div className="lobby_list">
          <Typography variant="h4" className="lobby_list_tittle">
            List of lobbies
          </Typography>
          <div className="lobby_list_labels">
            <Typography style={{ color: "#FF7600", fontWeight: "bold" }}>
              Name
            </Typography>
            <Typography style={{ color: "#FF7600", fontWeight: "bold" }}>
              {" "}
              N.players
            </Typography>
            <Typography style={{ color: "#FF7600", fontWeight: "bold" }}>
              Time
            </Typography>
            <Typography style={{ color: "#FF7600", fontWeight: "bold" }}>
              Ranked
            </Typography>
            <Typography style={{ color: "#FF7600", fontWeight: "bold" }}>
              Status
            </Typography>
          </div>
          <div className="lobby_list_lobies">
            <Link to={"/create_lobby"} style={{ textDecoration: "none" }}>
              <Lobby></Lobby>
            </Link>
            <Lobby></Lobby>
            <Lobby></Lobby>
          </div>
        </div>
        <div className="chat"></div>
      </div>
    </div>
  );
};
