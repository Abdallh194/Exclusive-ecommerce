import { createSlice } from "@reduxjs/toolkit";

export interface IProductsState {
  UserCarts: {
    [userId: string]: {
      CartItem: {
        id: string;
        images: string;
        title: string;
        price: number;
        cat_prefix: string;
        Quantity: number;
        discount: string;
        category: string;
        max: number;
      }[];
    };
  };
  CartItem: {
    id: string;
    images: string;
    title: string;
    price: number;
    cat_prefix: string;
    Quantity: number;
    discount: string;
    category: string;
    max: number;
  }[];
  FavItem: {
    id: string;
    images: string;
    title: string;
    price: number;
    cat_prefix: string;
    Quantity: number;
    discount: string;
    max: number;
    category: string;
  }[];
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
  confirmOrder: boolean;
}

const initialState: IProductsState = {
  UserCarts: {},
  CartItem: [],
  FavItem: [],
  loading: "pending",
  error: null,
  confirmOrder: false,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddItemToCard: (state, action) => {
      let isexist = false;
      state.CartItem.forEach((p) => {
        if (p.id === action.payload.id) {
          if (p.Quantity) {
            p.Quantity += 1;
          }
          isexist = true;
        }
      });
      if (!isexist) {
        state.CartItem.push(action.payload);
      }
    },
    SaveCartForUser: (state, action) => {
      const { userId } = action.payload;
      if (userId) {
        state.UserCarts[userId] = {
          CartItem: [...state.CartItem],
        };
        state.CartItem = [];
      }
    },
    LoadCartForUser: (state, action) => {
      const { userId } = action.payload;
      if (userId && state.UserCarts[userId]) {
        state.CartItem = [...state.UserCarts[userId].CartItem];
      }
    },
    IncreaseQty: (state, action) => {
      state.CartItem.forEach((p) => {
        if (p.id === action.payload) {
          p.Quantity += 1;
        }
      });
    },
    DecreaseQty: (state, action) => {
      state.CartItem.forEach((p) => {
        if (p.id === action.payload) {
          p.Quantity -= 1;
        }
      });
    },
    DeleteItemFromCard: (state, action) => {
      state.CartItem = state.CartItem.filter((e) => e.id !== action.payload);
    },
    DeleteItemFromWishlist: (state, action) => {
      state.FavItem = state.FavItem.filter((e) => e.id !== action.payload);
    },
    AddItemToFavList: (state, action) => {
      let isexist = false;
      state.FavItem.forEach((p) => {
        if (p.id == action.payload.id) {
          isexist = true;
        }
      });
      if (!isexist) {
        state.FavItem.push(action.payload);
      }
    },
  },
});

export const {
  AddItemToCard,
  SaveCartForUser,
  LoadCartForUser,
  IncreaseQty,
  DecreaseQty,
  DeleteItemFromCard,
  DeleteItemFromWishlist,
  AddItemToFavList,
} = CartSlice.actions;
export default CartSlice.reducer;
