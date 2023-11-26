import React from "react";
import styles from "./Lobby.css";
import { Typography, Input, Select, MenuItem, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { socket } from "../../socket";

export const Lobby = (lobbyinfo) => {
  const handleLobbyClick = () => {
    console.log(lobbyinfo);
    socket.emit("join-lobby", {
      lobbyId: lobbyinfo.id,
    });
    console.log("clicked");
  };
  return (
    <div
      className="lobby"
      onClick={handleLobbyClick}
      style={{ cursor: "pointer" }}
    >
      <Typography style={{ color: "black", fontWeight: "bold" }}>
        {lobbyinfo.name}
      </Typography>
      <Typography style={{ color: "black", fontWeight: "bold" }}>
        {" "}
        {lobbyinfo.numberOfPlayers}/{lobbyinfo.maxPlayers}
      </Typography>
      <Typography style={{ color: "black", fontWeight: "bold" }}>
        {lobbyinfo.gameSpeed}
      </Typography>
      <Typography style={{ color: "black", fontWeight: "bold" }}>
        {lobbyinfo.isRanked ? "Y" : "N"}
      </Typography>
      <Typography style={{ color: "black", fontWeight: "bold" }}>
        {lobbyinfo.isPrivate ? "private" : "public"}
      </Typography>
    </div>
  );
};
