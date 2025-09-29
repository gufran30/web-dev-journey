import axios from "../../api/axiosConfig";

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const response = await axios.post("/users", user);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
