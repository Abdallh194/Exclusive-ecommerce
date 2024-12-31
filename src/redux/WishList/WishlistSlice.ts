import { createSlice } from "@reduxjs/toolkit";

declare interface ICartState {
  items: string[];
  productFullInfo: TDataType;
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
  notavailabletoWishlist: boolean;
}

const initialState: ICartState = {
  items: [],
  productFullInfo: [],
  loading: "pending",
  error: null,
  notavailabletoWishlist: false,
};

const cartSliceEnhance = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    AddItemToWishList: (state, action) => {
      const id = action.payload;
      let isexist = false;
      state.items.forEach((p) => {
        if (p == id) {
          isexist = true;
          state.notavailabletoWishlist = true;
        }
      });
      if (!isexist) {
        state.items.push(id);
        state.notavailabletoWishlist = false;
      }
    },
    DeleteFavItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((e) => e !== id);
    },
  },
});

export const { AddItemToWishList, DeleteFavItem } = cartSliceEnhance.actions;
export default cartSliceEnhance.reducer;
