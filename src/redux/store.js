import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { leaderboardReducer } from "./slices/leaderboard";
import { searchPlayerReducer } from "./slices/searchplayer";
import { findNicknameReducer } from "./slices/searchnickname";

import { findPlayerReducer } from "./slices/findplayer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    leaderboard: leaderboardReducer,
    searchplayer: searchPlayerReducer,
    findnickname: findNicknameReducer,
    findplayer: findPlayerReducer,
  },
});

export default store;
