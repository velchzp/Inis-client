import React from "react";
import {
  Typography,
  Button,
  List,
  ListItem,
  Box,
  Icon,
  Stack,
} from "@mui/material";
import styles from "./Home.css";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth, logout } from "../../redux/slices/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Login } from "../../components/Login";
import { Create_lobby_button } from "../../components/Create_lobby_button";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCreateLobbyButtonClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm("U want logout?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
      // window.location.reload();
    }
  };

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
          <Link to={"/lobby_list"}>
            <Button
              variant="contained"
              className="home_button"
              disableElevation
            >
              {" "}
              Join lobby{" "}
            </Button>
          </Link>
          {}
          {isAuth ? (
            <Button
              variant="contained"
              className="home_button"
              disableElevation
              onClick={handleCreateLobbyButtonClick}
            >
              {" "}
              Create lobby{" "}
            </Button>
          ) : (
            <Button
              variant="contained"
              className="home_button"
              disableElevation
              disabled
            >
              {" "}
              Create lobby{" "}
            </Button>
          )}
        </Box>
        <Box>
          <img
            src={process.env.PUBLIC_URL + "/cards_collage.png"}
            alt="Logo"
            className="main_img"
          />
          <br />
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
        {isAuth ? (
          <Button
            variant="text"
            onClick={onClickLogout}
            style={{
              fontSize: 18,
              color: "white",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Logout
          </Button>
        ) : (
          <Stack></Stack>
        )}
        {isOpen && (
          <div className="overlay">
            <div className="createlobby">
              <Button
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: "#FF7600",
                }}
              >
                <CloseIcon />
              </Button>
              <Create_lobby_button></Create_lobby_button>
            </div>
          </div>
        )}
      </Box>
    </Box>
  );
};
