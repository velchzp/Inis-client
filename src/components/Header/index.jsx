import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Button,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Login } from "../Login";
import LoginIcon from "@mui/icons-material/Login";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Header.css";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";

export const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <AppBar position="static" className="navbar" elevation={0}>
      <Toolbar className="toolbar">
        <IconButton size="large" edge="start" className="iconbutton">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="Logo"
            className="logo"
          />
        </IconButton>
        <Stack direction={"row"} spacing={1} className="listitems">
          <Button
            color="inherit"
            className="button_text"
            style={{ textTransform: "none" }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            className="button_text"
            style={{ textTransform: "none" }}
          >
            Leaderboard
          </Button>
          <Button
            color="inherit"
            className="button_text"
            style={{ textTransform: "none" }}
          >
            FAQ
          </Button>
          <Button
            color="inherit"
            className="button_text"
            style={{ textTransform: "none" }}
          >
            Rules
          </Button>
        </Stack>

        <Stack direction={"row"} className="logSear">
          <form>
            <TextField
              label="Find player"
              variant="outlined"
              size="small"
              InputLabelProps={{
                style: { color: "white" },
              }}
              InputProps={{
                classes: {
                  notchedOutline: "white-border",
                },
                style: {
                  color: "white",
                  width: 150,
                },
              }}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon style={{ fill: "white", fontSize: "30px" }} />
            </IconButton>
          </form>
          {isAuth ? (
            <Button color="inherit">My profile</Button>
          ) : (
            <Stack direction="row" alignItems="center">
              {" "}
              {/* Wrap the Button and LoginIcon in a Stack */}
              <Button color="inherit" onClick={handleButtonClick}>
                Login
              </Button>
              <LoginIcon className="loginimg" style={{ fontSize: "40px" }} />
            </Stack>
          )}
        </Stack>
        {isOpen && (
          <div className="overlay">
            <div className="registration">
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
              <Login />
            </div>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
