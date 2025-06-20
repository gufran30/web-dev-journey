import axios from "../../api/axiosconfig";
import { loadProduct } from "../reducers/productSlice";
import { loadUser } from "../reducers/userSlice";

export const asyncLoadProducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadProduct(data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/products", product);
    console.log(res);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.log(error);
  }
};
