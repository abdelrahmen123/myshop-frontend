import { Product } from "@/lib/types/EntitiesTypes";
import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  products: Product[];
  pageNumber: number;
  markedProduct: Product;
}

const initialState: ProductState = {
  products: [],
  pageNumber: 1,
  markedProduct: {
    id: "",
    name: "",
    description: "",
    price: 0,
    discountPercent: 0,
    categoryId: "",
    image: "",
    images: [],
    quantity: 0,
    rating: 0,
    ratingAverage: 0,
    createdAt: "",
    updatedAt: "",
    reviews: [],
    sold: 0,
    category: {
      id: "",
      name: "",
      image: "",
      createdAt: "",
      updatedAt: "",
      products: [],
    },
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setMarkedProduct: (state, action) => {
      state.markedProduct = action.payload;
    },
  },
});

export const { setProducts, setPageNumber, setMarkedProduct } =
  productSlice.actions;
export default productSlice.reducer;
