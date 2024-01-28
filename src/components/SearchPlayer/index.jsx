import React from "react";
import { Typography, Button } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import style from "./FoundPlayers.css";
import axios from "../../axios.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFindPlayer } from "../../redux/slices/findplayer.js";
import { fetchSearchPlayer } from "../../redux/slices/searchplayer.js";

export const FoundPlayers = (player) => {
  const dispatch = useDispatch();
  const MeInfo = useSelector((state) => state.auth);
  const SearchPlayer = useSelector((state) => state.findplayer);
  const navigate = useNavigate();
  
  const handleAddFrienButton = () => {
    axios.post(`users/add/${player._id}`);
 
  };
  const handleAddAdminClick = () => {
    axios.patch(`/users/giveAdmin/${player._id}`);

  };
  const handleBanClick = () => {
    axios.patch(`/users/ban/${player._id}`);
  
  };
  const handleProfileButton = () => {
    dispatch(fetchFindPlayer(player._id));
   
    navigate(`/another_player_profile`);
  };
  

  return (
    <div style={{ display: "flex" }}>
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
              onClick={handleProfileButton}
            >
              <Typography style={{ fontSize: 12 }}>Profile</Typography>
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

      {MeInfo.data.user.role == "Admin" ? (
        <div className="Admin_buttons">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#00C90D",
              height: 20,
              marginTop: 3,
              marginLeft: 10,
            }}
            onClick={handleAddAdminClick}
          >
            <Typography style={{ fontSize: 12 }}>Add admin</Typography>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "red",
              height: 20,
              marginTop: 3,
              marginLeft: 10,
            }}
            onClick={handleBanClick}
          >
            <Typography style={{ fontSize: 12 }}>BAN</Typography>
          </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
