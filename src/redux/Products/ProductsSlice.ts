import { createSlice } from "@reduxjs/toolkit";
import GetAllProductsThunck from "./act/GetAllProducts";

const initialState: IProductsState = {
  Products: [],
  loading: "pending",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanprodcutfullinfo: (state) => {
      state.Products = [];
    },
  },
  extraReducers: (builder) => {
    //Get All Products
    builder.addCase(GetAllProductsThunck.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(GetAllProductsThunck.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload) {
        state.Products = action.payload;
      }
    });
    builder.addCase(GetAllProductsThunck.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanprodcutfullinfo } = productsSlice.actions;
export { GetAllProductsThunck };
export default productsSlice.reducer;
