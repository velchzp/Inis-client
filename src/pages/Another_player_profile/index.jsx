import { React, useState } from "react";

import { useSelector } from "react-redux";
import { Typography, ListItemButton, ListItemText } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import { Another_player_Owerview } from "../../components/Another_player_Owerview";
import { Another_Player_Friendlist } from "../../components/Another_Player_Friendlist";
import { Another_Player_History } from "../../components/Another_Player_History";

export const Another_player_profile = () => {
  const FindPlayer = useSelector((state) => state.findplayer);
  const [activeComponent, setActiveComponent] = useState("Overview");

  
  const handleItemClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderContent = () => {
    switch (activeComponent) {
      case "Overview":
        return <Another_player_Owerview />;
      case "Friends":
        return <Another_Player_Friendlist />;
      case "History":
        return <Another_Player_History />;
      default:
        return null;
    }
  };

  return (
    <div className="profile_wrapper">
      <div className="profile">
        <div className="profile_top">
          {FindPlayer ? (
            <Typography variant="h4" className="profile_nickname">
              {FindPlayer?.data?.user?.userName}
            </Typography>
          ) : (
            <p>Loading...</p>
          )}
          <Person2Icon
            style={{
              fontSize: "50px",
              fill: "white",
              border: "1px solid black",
              borderRadius: 20,
              marginTop: 22,
              marginLeft: 5,
            }}
          />
        </div>
        <div className="profile_settings">
          <div className="profile_menu">
            <ListItemButton component="a" href="#simple-list">
              <ListItemText>
                <Typography
                  className="menu_item"
                  variant="subtitle1"
                  onClick={() => handleItemClick("Overview")}
                >
                  Overview
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              component="a"
              href="#simple-list"
              onClick={() => handleItemClick("Friends")}
            >
              <ListItemText>
                <Typography className="menu_item" variant="subtitle1">
                  Friends
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              component="a"
              href="#simple-list"
              onClick={() => handleItemClick("History")}
            >
              <ListItemText>
                <Typography className="menu_item" variant="subtitle1">
                  History
                </Typography>
              </ListItemText>
            </ListItemButton>
          </div>
          <div className="profile_content">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};
