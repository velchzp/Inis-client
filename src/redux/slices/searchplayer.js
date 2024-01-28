import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchSearchPlayer = createAsyncThunk(
  "/search_player",
  async (params) => {
    const { data } = await axios.get(`/users/search/${params}`, params);
    return data;
  }
);

const initialState = {
  data: null,
  status: "loading",
};
const searchPlayerSlice = createSlice({
  name: "search_player",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSearchPlayer.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchSearchPlayer.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchSearchPlayer.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
  },
});

export const searchPlayerReducer = searchPlayerSlice.reducer;
