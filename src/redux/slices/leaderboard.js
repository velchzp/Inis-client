import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchLeaderBoard = createAsyncThunk(
  "/leaderboard",
  async (params) => {
    const { data } = await axios.get("/leaderboard", params);
    return data;
  }
);

const initialState = {
  data: null,
  status: "loading",
};
const lederboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLeaderBoard.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchLeaderBoard.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchLeaderBoard.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
  },
});

export const leaderboardReducer = lederboardSlice.reducer;
