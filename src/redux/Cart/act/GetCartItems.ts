import { RootState } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Allproducts } from "@constants/constants";

const mock = new MockAdapter(axios);
mock.onGet("/products").reply(200, Allproducts);

const GetAllCartItemsThunk = createAsyncThunk(
  "products/getAllCartItems",
  async (_, thunkapi) => {
    const { getState, fulfillWithValue } = thunkapi;
    const { cartenhance, products } = getState() as RootState;
    const { Products } = products;
    const itemsId = Object.keys(cartenhance.items);
    if (!itemsId.length) {
      return fulfillWithValue([]);
    }
    const ItemFullInfo = Products.filter((el) => itemsId.includes(el.id));
    return ItemFullInfo;
  }
);

export default GetAllCartItemsThunk;
