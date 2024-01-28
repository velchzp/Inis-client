import React from "react";
import { Typography, Button } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import "./FriendNickname.css";
import axios from "../../axios.js";

export const FriendNickname = (player) => {
 
  const handleRemoveButton = () => {
    axios.delete(`users/add/${player.id}`);
    
  };
  return (
    <div>
      <div className="friend_wrapper">
        <div className="friend_list">
          <div className="friend_list_nicknames">
            <Person2Icon />
            <Typography>{player.userName}</Typography>
          </div>
          <div className="friend_list_buttons">
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
    </div>
  );
};
