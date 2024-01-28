import React from "react";
import style from "./Lobby_List.css";
import { Player } from "../../components/Player";
import { Typography } from "@mui/material";
import { useState } from "react";
import { Lobby } from "../../components/Lobby";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { socket } from "../../socket";

export const LobbyList = () => {
  const [LobbyList, setLobbyList] = useState(null);
  useEffect(() => {
    socket.on("lobby-list", (lobbylist) => {
      setLobbyList(lobbylist);
    });
    socket.emit("request-lobby-list");
  }, []);
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
            {LobbyList ? (
              LobbyList.slice(0, 4).map((lobby, index) => (
                <Lobby key={index} {...lobby} />
              ))
            ) : (
              <div>Waiting for lobies data...</div>
            )}
          </div>
        </div>
        <div className="lobby_list_chat"></div>
      </div>
    </div>
  );
};
