import React from "react";
import style from "./Create_Lobby.css";
import { Player } from "../../components/Player";
import { Typography, Select, MenuItem, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { socket } from "../../socket";
import { useSelector } from "react-redux";

export const Create_Lobby = () => {
  const MeInfo = useSelector((state) => state.auth);
  const [PlayersNumber, setPlayersNumber] = useState(2);
  const [gameSpeed, setGameSpeed] = useState("Medium");
  const [LobbyInfo, setLobbyInfo] = useState(null);
  const { id } = useParams();
  const [isRanked, setIsRanked] = useState(false);
  const [GameId, setGameId] = useState(null);

 
  const handlePlayersNumChange = (event) => {
    setPlayersNumber(event.target.value);
  };
  const handleGameSpeedChange = (event) => {
    setGameSpeed(event.target.value);
  };
  const handleReadyButton = () => {
    socket.emit("is-ready");
  };
  const handleCheckboxChange = (event) => {
    setIsRanked(event.target.checked);
  };
  const handleStartGameButton = () => {
    socket.emit("start-game");
  };
  useEffect(() => {
    socket.on("lobby-updated", (lobbyinfo) => {
      setLobbyInfo(lobbyinfo);
    });
    socket.on("start-game", (gameinfo) => {
      window.location.href = `http://localhost:4444/game/${gameinfo.gameId}`;
    });
    socket.emit("lobby-info");
  }, []);

  return (
    <div className="create_lobby_wrapper">
      <div className="create_lobby_parts">
        <div className="players">
          {LobbyInfo && LobbyInfo.players ? (
            LobbyInfo.players
              .slice(0, 4)
              .map((player, index) => <Player key={index} {...player} />)
          ) : (
            <div>Waiting for lobies data...</div>
          )}
        </div>
        <div className="lobby_settings">
          <Typography variant="h3" className="lobby_settings_tittle">
            Lobby Settings
          </Typography>
          <div className="lobby_name">
            <Typography className="lobby_name_text">
              Lobby Name : {LobbyInfo && LobbyInfo.name}
            </Typography>
            <div style={{ display: "flex" }}>
              <Typography className="lobby_name_text">
                Number of players:
              </Typography>
              <Select
                value={LobbyInfo && LobbyInfo.maxPlayers}
                onChange={handlePlayersNumChange}
                className="numplayers"
                size="small"
              >
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </div>
          </div>
          <div className="game_speed">
            <Typography className="game_speed_tittle">
              Game speed presets
            </Typography>
            <Select
              value={LobbyInfo && LobbyInfo.gameSpeed}
              onChange={handleGameSpeedChange}
              className="gamespeed_select"
              size="small"
            >
              <MenuItem value="slow">Slow</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="fast">Fast</MenuItem>
            </Select>
            <Typography className="game_speed_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Typography>
          </div>
          <div className="ramked">
            {/* <Typography style={{ display: "inline-block" }}>
              Private?
            </Typography>
            <Checkbox
              checked={isRanked}
              onChange={handleCheckboxChange}
              style={{ padding: 0 }}
            /> */}
          </div>
          <Button
            variant="contained"
            className="ready_button"
            disableElevation
            onClick={handleReadyButton}
          >
            {" "}
            Ready{" "}
          </Button>
          {LobbyInfo &&
          LobbyInfo.canStartGame &&
          MeInfo.data.user._id == LobbyInfo.owner.userId ? (
            <Button
              variant="contained"
              className="ready_button"
              disableElevation
              onClick={handleStartGameButton}
            >
              {" "}
              StartGame{" "}
            </Button>
          ) : (
            <></>
          )}
        </div>
        <div className="chat"></div>
      </div>
    </div>
  );
};
