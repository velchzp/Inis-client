import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { leaderboardReducer } from "./slices/leaderboard";

const store = configureStore({
  reducer: {
    auth: authReducer,
    leaderboard: leaderboardReducer,
  },
});

export default store;
