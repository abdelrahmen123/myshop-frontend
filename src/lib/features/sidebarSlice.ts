import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { isOpened: false },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpened = !state.isOpened;
    },
    openSidebar: (state) => {
      state.isOpened = true;
    },
    closeSidebar: (state) => {
      state.isOpened = false;
    },
  },
});

export const { toggleSidebar, openSidebar, closeSidebar } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
