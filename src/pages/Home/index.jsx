import React from "react";
import { Typography, Button, List, ListItem, Box, Icon } from "@mui/material";
import styles from "./Home.css";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import SettingsIcon from "@mui/icons-material/Settings";
export const Home = () => {
  return (
    <Box>
      <div className="body">
        <Box className="left_content">
          <Typography variant="h3" className="home_title">
            {" "}
            Why Inis web?{" "}
          </Typography>
          <List
            sx={{
              listStyleType: "disc",
              pl: 2,
              "& .MuiListItem-root": {
                display: "list-item",
              },
            }}
          >
            {" "}
            <ListItem>
              <Typography variant="h5" className="list_text">
                Easy to play!
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5" className="list_text">
                Fun!
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5" className="list_text">
                Completely for free!
              </Typography>
            </ListItem>
          </List>

          <Button variant="contained" className="home_button" disableElevation>
            {" "}
            Join lobby{" "}
          </Button>
          <Button variant="contained" className="home_button" disableElevation>
            {" "}
            Create lobby{" "}
          </Button>
        </Box>
        <Box>
          <img
            src={process.env.PUBLIC_URL + "/main_image.png"}
            alt="Logo"
            className="main_img"
          />
          <br />
          <Box className="right_content_online" alignItems="center">
            <Brightness1Icon style={{ color: "#00c90d", height: 15 }} />
            <Typography
              style={{ fontWeight: "bold", marginRight: 8, color: "white" }}
            >
              0 online
            </Typography>
            <Typography style={{ fontWeight: "bold", color: "white" }}>
              0 lobbies
            </Typography>
          </Box>
        </Box>
      </div>
      <Box
        className="settings"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          variant="text"
          style={{
            fontSize: 18,
            color: "white",
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Settings
        </Button>
        <SettingsIcon style={{ height: 30 }} />
      </Box>
    </Box>
  );
};
