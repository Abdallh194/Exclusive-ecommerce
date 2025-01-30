import { createSlice } from "@reduxjs/toolkit";

// تعريف نوع بيانات المستخدم
export interface IUser {
  id: string;
  FirstName: string;
  LastName: string;
  Phone: string;
  Email: string;
  Password: string;
  Address: string;
}

export interface IUsersState {
  Users: IUser[];
  DefaultUserEmail: string;
  DefaultUserPassword: string;
  exsitEmail: boolean;
  isloggin: boolean;
  isToCheckout: boolean;
  activeUserId: string | null;
  userwishlist: [];
  usercart: [];
}

const initialState: IUsersState = {
  Users: [
    {
      id: "1",
      FirstName: "Abdallh",
      LastName: "Sabry",
      Phone: "01091415560",
      Email: "abdallhsabry194@gmail.com",
      Password: "12345678@",
      Address: "Tanta Gharbia",
    },
  ],
  DefaultUserEmail: "abdallhsabry194@gmail.com",
  DefaultUserPassword: "12345678@",
  exsitEmail: false,
  isloggin: false,
  isToCheckout: false,
  activeUserId: null,
  userwishlist: [],
  usercart: [],
};

// تعريف Slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    ValidateEmailAddress: (state, action) => {
      state.exsitEmail = state.Users.some(
        (user) => user.Email === action.payload
      );
    },

    AddNewUser: (state, action) => {
      if (!state.exsitEmail) {
        state.Users.push({ id: Date.now().toString(), ...action.payload });
      }
    },

    SaveWishlistToUser: (state, action) => {
      state.userwishlist = action.payload;
    },
    SavecartToUser: (state, action) => {
      state.usercart = action.payload;
    },

    SetActiveUser: (state, action) => {
      const user = state.Users.find((user) => user.id === action.payload);
      if (user) {
        state.activeUserId = user.id;
        state.isloggin = true;
      }
    },

    LogoutUser: (state) => {
      state.activeUserId = null;
      state.isloggin = false;
    },

    UpdateUser: (state, action) => {
      const { id, ...updatedData } = action.payload;
      const userIndex = state.Users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.Users[userIndex] = { ...state.Users[userIndex], ...updatedData };
      }
    },
    ActivetoCheckout: (state) => {
      state.isToCheckout = true;
    },
  },
});

export const {
  AddNewUser,
  ValidateEmailAddress,
  SetActiveUser,
  LogoutUser,
  ActivetoCheckout,
  UpdateUser,
  SaveWishlistToUser,
  SavecartToUser,
} = usersSlice.actions;
export default usersSlice.reducer;
