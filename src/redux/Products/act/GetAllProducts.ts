import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Allproducts } from "@constants/constants";

const mock = new MockAdapter(axios);
mock.onGet("/products").reply(200, Allproducts);

const GetAllProductsThunck = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
      const req = await axios.get<TDataType>("/products");
      return req.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("Unexpected error");
      }
    }
  }
);

export default GetAllProductsThunck;
