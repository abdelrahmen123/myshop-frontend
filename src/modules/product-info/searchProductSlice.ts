import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SearchProductState = {
  searchKeyword: string;
};

const initialState: SearchProductState = {
  searchKeyword: "",
};

const searchProductSlice = createSlice({
  name: "searchProduct",
  initialState,
  reducers: {
    setSearchProductKeyword: (state, action: PayloadAction<string>) => {
      state.searchKeyword = action.payload;
    },
  },
});

export const { setSearchProductKeyword } = searchProductSlice.actions;
export default searchProductSlice.reducer;
