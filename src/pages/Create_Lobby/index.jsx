import React from "react";
import style from "./Create_Lobby.css";
import { Player } from "../../components/Player";
import { Typography, Input, Select, MenuItem, Button } from "@mui/material";
import { useState } from "react";

export const Create_Lobby = () => {
  const [PlayersNumber, setPlayersNumber] = useState(2);
  const [gameSpeed, setGameSpeed] = useState("Medium");

  const handlePlayersNumChange = (event) => {
    setPlayersNumber(event.target.value);
  };
  const handleGameSpeedChange = (event) => {
    setGameSpeed(event.target.value);
  };
  return (
    <div className="create_lobby_wrapper">
      <div className="create_lobby_parts">
        <div className="players">
          <Player ready={true}></Player>
          <Player ready={false}></Player>
          <Player ready={true}></Player>
        </div>
        <div className="lobby_settings">
          <Typography variant="h3" className="lobby_settings_tittle">
            Lobby Settings
          </Typography>
          <div className="lobby_name">
            <Typography className="lobby_name_text">
              Lobby Name : lobby1
            </Typography>
            <div style={{ display: "flex" }}>
              <Typography className="lobby_name_text">
                Number of players:
              </Typography>
              <Select
                value={PlayersNumber}
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
              value={gameSpeed}
              onChange={handleGameSpeedChange}
              className="gamespeed_select"
              size="small"
            >
              <MenuItem value="Slow">Slow</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Fast">Fast</MenuItem>
            </Select>
            <Typography className="game_speed_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Typography>
          </div>
          <Button variant="contained" className="home_button" disableElevation>
            {" "}
            Ready{" "}
          </Button>
        </div>
        <div className="chat"></div>
      </div>
    </div>
  );
};
