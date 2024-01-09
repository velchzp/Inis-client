import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nickName: null,
};

const findNicknameSlice = createSlice({
  name: "findnickname",
  initialState,
  reducers: {
    setNickname: (state, action) => {
      state.nickName = action.payload;
    },
  },
});

export const { setNickname } = findNicknameSlice.actions;
export const findNicknameReducer = findNicknameSlice.reducer;
