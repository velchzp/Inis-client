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
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fetchFindPlayer } from "../../redux/slices/searchplayer";
import { useNavigate } from "react-router-dom";
import { setNickname } from "../../redux/slices/searchnickname";

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      userName: "",
    },
    mode: "onChange",
  });

  const onSubmit = (values) => {
    dispatch(setNickname(values));
    navigate("/find_player");
  };

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
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              className="button_text"
              style={{
                textTransform: "none",
                color: "white", // Ensure the text color is inherited
              }}
            >
              Home
            </Button>
          </Link>
          <Link to={"/leader_board"} style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              className="button_text"
              style={{ textTransform: "none", color: "white" }}
            >
              Leaderboard
            </Button>
          </Link>
          <Link to={"/faq"} style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              className="button_text"
              style={{ textTransform: "none", color: "white" }}
            >
              FAQ
            </Button>
          </Link>
          <Link to={"/Rules"} style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              className="button_text"
              style={{ textTransform: "none", color: "white" }}
            >
              Rules
            </Button>
          </Link>
        </Stack>

        <Stack direction={"row"} className="logSear">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("userName")}
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
            <Link to={"/my_profile"} style={{ textDecoration: "none" }}>
              <Button style={{ textTransform: "none", color: "white" }}>
                My profile
              </Button>
            </Link>
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
