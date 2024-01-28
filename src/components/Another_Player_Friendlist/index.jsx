import React from "react";
import { Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { FriendNickname } from "../FriendNickname";
export const Another_Player_Friendlist = () => {
  const FindPlayer = useSelector((state) => state.findplayer);
  
  return (
    <div className="friendlist_wrapper">
      <div
        className="friendlist"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h4">Friends</Typography>
        {FindPlayer?.data?.user?.friends ? (
          FindPlayer?.data?.user?.friends
            .slice(0, 4)
            .map((friend, index) => <FriendNickname key={index} {...friend} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
