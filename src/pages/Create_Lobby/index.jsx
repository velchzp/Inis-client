import React from "react";
import style from "./Create_Lobby.css";

export const Create_Lobby = () => {
  return (
    <div className="create_lobby_wrapper">
      <div className="create_lobby_parts">
        <div className="players"></div>
        <div className="lobby_settings"></div>
        <div className="chat"></div>
      </div>
    </div>
  );
};
