import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { leaderboardReducer } from "./slices/leaderboard";
import { findPlayerReducer } from "./slices/findplayer";
import { findNicknameReducer } from "./slices/findnickname";

const store = configureStore({
  reducer: {
    auth: authReducer,
    leaderboard: leaderboardReducer,
    findplayer: findPlayerReducer,
    findnickname: findNicknameReducer,
  },
});

export default store;
