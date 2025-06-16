import { Category } from "@/lib/types/EntitiesTypes";
import { createSlice } from "@reduxjs/toolkit";

interface CategoryState {
  categories: Category[];
  markedCategory: string;
}

const initialState: CategoryState = {
  categories: [],
  markedCategory: "All",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setMarkedCategory: (state, action) => {
      state.markedCategory = action.payload;
    },
  },
});

export const { setCategories, setMarkedCategory } = categorySlice.actions;
export default categorySlice.reducer;
