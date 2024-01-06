import React from "react";
import { Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { FriendNickname } from "../FriendNickname";
export const FriendList = () => {
  const MeInfo = useSelector((state) => state.auth);
  console.log(MeInfo?.data?.user?.friends);
  return (
    <div className="friendlist_wrapper">
      <div
        className="friendlist"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h4">Friends</Typography>
        {MeInfo?.data?.user?.friends ? (
          MeInfo?.data?.user?.friends
            .slice(0, 4)
            .map((friend, index) => <FriendNickname key={index} {...friend} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
