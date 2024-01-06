import React from "react";
import { Typography, Button } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import style from "./FriendNickname.css";
import axios from "../../axios.js";

export const FriendNickname = (player) => {
  console.log();
  const handleRemoveButton = () => {
    axios.delete(`users/add/${player._id}`);
    console.log("deleted");
  };
  return (
    <div>
      <div className="findplayer_wrapper">
        <div className="player_list">
          <div className="player_list_nicknames">
            <Person2Icon />
            <Typography>{}</Typography>
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
                backgroundColor: "red",
                height: 20,
                marginTop: 3,
                marginLeft: 10,
              }}
              onClick={handleRemoveButton}
            >
              <Typography style={{ fontSize: 12 }}>Remove</Typography>
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
