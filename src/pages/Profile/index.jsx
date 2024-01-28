import { React, useState } from "react";
import style from "./Profile.css";
import { useSelector } from "react-redux";
import { Typography, ListItemButton, ListItemText } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import { Overview } from "../../components/Overview";
import { AccountSettings } from "../../components/AccountSettings";
import { FriendList } from "../../components/Friend_list";
import { History } from "../../components/History";

export const Profile = () => {
  const MeInfo = useSelector((state) => state.auth);
  const FindPlayer = useSelector((state) => state.findplayer);
  const [activeComponent, setActiveComponent] = useState("Overview");
  console.log(MeInfo);
  console.log("FindPlayer", FindPlayer);
  const handleItemClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderContent = () => {
    switch (activeComponent) {
      case "Overview":
        return <Overview />;
      case "Friends":
        return <FriendList />;
      case "History":
        return <History />;
      case "AccountSettings":
        return <AccountSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="profile_wrapper">
      <div className="profile">
        <div className="profile_top">
          {MeInfo ? (
            <Typography variant="h4" className="profile_nickname">
              {MeInfo?.data?.user?.userName}
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

            <ListItemButton
              component="a"
              href="#simple-list"
              onClick={() => handleItemClick("AccountSettings")}
            >
              <ListItemText>
                <Typography className="menu_item" variant="subtitle1">
                  Account settings
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
