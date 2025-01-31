import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const ThemeActions = themeSlice.actions;
export default themeSlice.reducer;
