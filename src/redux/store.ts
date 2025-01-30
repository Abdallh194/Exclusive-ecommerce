import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./user/LoginSlice";
import CartSlice from "./Cart/CartSlice";
import productsSlice from "./Products/ProductsSlice";
import cartSliceEnhance from "./Cart/CartSliceEnhance";
import Wishlist from "./WishList/WishlistSlice";
// ...

export const store = configureStore({
  reducer: {
    user: loginSlice,
    cart: CartSlice,
    products: productsSlice,
    cartenhance: cartSliceEnhance,
    wishlist: Wishlist,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
