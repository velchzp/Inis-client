import React from "react";
import { Typography, Button } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import style from "./FoundPlayers.css";
import axios from "../../axios.js";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { fetchFindPlayer } from "../../redux/slices/findplayer.js";

export const FoundPlayers = (player) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(player._id);
  const handleAddFrienButton = () => {
    axios.post(`users/add/${player._id}`);
    console.log("added");
  };
  const handlePlayerClick = (_id) => {
    dispatch(fetchFindPlayer(_id));
    navigate("/my_profile");
  };
  return (
    <div
      onClick={() => handlePlayerClick(player._id)}
      style={{ cursor: "pointer" }}
    >
      <div className="findplayer_wrapper">
        <div className="player_list">
          <div className="player_list_nicknames">
            <Person2Icon />
            <Typography>{player.userName}</Typography>
          </div>
          <div className="player_list_buttons">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#FF7600",
                height: 20,
                marginTop: 3,
                marginLeft: 10,
              }}
            >
              <Typography style={{ fontSize: 12 }}>Profile</Typography>
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#FF7600",
                height: 20,
                marginTop: 3,
                marginLeft: 10,
              }}
            >
              <Typography style={{ fontSize: 12 }}>Chat</Typography>
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#00C90D",
                height: 20,
                marginTop: 3,
                marginLeft: 10,
              }}
              onClick={handleAddFrienButton}
            >
              <Typography style={{ fontSize: 12 }}>Add friend</Typography>
            </Button>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: 400,
          float: "left",
          margin: 0,
          backgroundColor: "black",
          borderColor: "black",
        }}
      />
    </div>
  );
};
