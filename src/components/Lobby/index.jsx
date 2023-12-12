import React, { useState } from "react";
import styles from "./Lobby.css";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { socket } from "../../socket";

export const Lobby = (lobbyinfo) => {
  const navigate = useNavigate();
  const [IsJoined, setIsJoined] = useState(false);
  const handleLobbyClick = () => {
    console.log(lobbyinfo);
    socket.emit("join-lobby", {
      lobbyId: lobbyinfo.id,
    });
    socket.on("lobby-joined", (isJoined) => {
      if (isJoined) {
        navigate(`/lobby/${lobbyinfo.id}`);
      }
    });
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
