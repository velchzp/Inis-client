import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchFindPlayer = createAsyncThunk(
  "/find_player",
  async (params) => {
    const { data } = await axios.get(`/users/search/${params}`, params);
    return data;
  }
);

const initialState = {
  data: null,
  status: "loading",
};
const findPlayerSlice = createSlice({
  name: "find_player",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFindPlayer.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchFindPlayer.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchFindPlayer.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
  },
});

export const findPlayerReducer = findPlayerSlice.reducer;
