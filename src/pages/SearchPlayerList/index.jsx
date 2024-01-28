import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, TextField, IconButton } from "@mui/material";
import { FoundPlayers } from "../../components/SearchPlayer";
import { fetchSearchPlayer } from "../../redux/slices/searchplayer";
import { useForm } from "react-hook-form";
import { setNickname } from "../../redux/slices/searchnickname";
import SearchIcon from "@mui/icons-material/Search";

import style from "./FindPlayerList.css";

export const FindPlayerList = () => {
  const dispatch = useDispatch();
  const find_nickname = useSelector((state) => state.findnickname);
  const find_player = useSelector((state) => state.searchplayer);

  const userName = find_nickname?.nickName?.userName;

  const { register, handleSubmit } = useForm({
    defaultValues: {
      userName: "",
    },
    mode: "onChange",
  });

  const onSubmit = (values) => {
    dispatch(setNickname(values));
  };
  useEffect(() => {
    if (userName) {
      dispatch(fetchSearchPlayer(userName));
    }
  }, [userName, dispatch]);

  return (
    <div className="findplayerlist_wrapper">
      <div className="findplayerparts">
        <div className="findplayerlist_search">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("userName")}
              label="Find player"
              variant="filled"
              InputLabelProps={{
                style: { color: "white" },
              }}
              InputProps={{
                classes: {
                  notchedOutline: "white-border",
                },
                style: {
                  color: "white",
                  width: 1000,
                },
              }}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon style={{ fill: "white", fontSize: "47px" }} />
            </IconButton>
          </form>
        </div>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          {userName
            ? `Search result for "${userName}"`
            : "No username provided"}
        </Typography>
        <div className="findplayer_list">
          {find_player.data ? (
            find_player.data
              .slice(0, 4)
              .map((player, index) => <FoundPlayers key={index} {...player} />)
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
