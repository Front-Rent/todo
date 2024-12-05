import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: { text: "" },
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload;
    },
    clearText: (state) => {
      state.text = "";
    },
  },
});
export const { changeText, clearText } = textSlice.actions;
export default textSlice.reducer;
