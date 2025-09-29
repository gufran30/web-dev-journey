import axios from "axios";

const getData = () => {
  axios
    .get("https://fakestoreapi.com/products/1")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getData;
