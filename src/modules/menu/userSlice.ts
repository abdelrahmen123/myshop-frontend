import { createSlice } from "@reduxjs/toolkit";

export interface User {
  data: {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    image: string;
    phone: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  };
}

const initialState: User = {
  data: {
    id: "",
    name: "Unknown",
    email: "",
    password: "",
    role: "USER",
    image: "",
    phone: "",
    address: "",
    createdAt: "",
    updatedAt: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
