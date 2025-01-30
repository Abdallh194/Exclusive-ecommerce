import { createSlice } from "@reduxjs/toolkit";
import GetAllCartItemsThunck from "./act/GetCartItems";

declare interface ICartState {
  items: { [key: string]: number };
  productFullInfo: TDataType;
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
  CartwithQuantity: TDataType;
  UserOrders: TDataType;
  confirmorder: boolean;
}

const initialState: ICartState = {
  items: {},
  productFullInfo: [],
  CartwithQuantity: [],
  UserOrders: [],
  loading: "pending",
  error: null,
  confirmorder: false,
};

const cartSliceEnhance = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddItemToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    IncreaseQty: (state, action) => {
      const id = action.payload;
      state.items[id]++;
    },
    DecreaseQty: (state, action) => {
      const id = action.payload;
      state.items[id]--;
    },
    DeleteItemFromCard: (state, action) => {
      const id = action.payload;
      delete state.items[id];
      state.productFullInfo = state.productFullInfo.filter((e) => e.id !== id);
    },
    clearcartproductfullinfo: (state) => {
      state.productFullInfo = [];
      state.items = {};
    },
    AddOrderToUser: (state, action) => {
      state.UserOrders.push(...action.payload);
    },
    ConfirmOrder: (state) => {
      state.confirmorder = !state.confirmorder;
    },
  },
  extraReducers: (builder) => {
    //Get All Products
    builder.addCase(GetAllCartItemsThunck.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(GetAllCartItemsThunck.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload) {
        state.productFullInfo = action.payload.map((product) => ({
          ...product,
          category: product.category ?? "Unknown",
        }));
      }
    });
    builder.addCase(GetAllCartItemsThunck.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});
export { GetAllCartItemsThunck };
export const {
  AddItemToCart,
  IncreaseQty,
  DecreaseQty,
  DeleteItemFromCard,
  clearcartproductfullinfo,
  AddOrderToUser,
  ConfirmOrder,
} = cartSliceEnhance.actions;

export default cartSliceEnhance.reducer;
