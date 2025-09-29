import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../store/actions/productAction";

function CreateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  function createProductHandler(product) {
    product.id = nanoid();
    console.log(product);
    dispatch(asyncCreateProduct(product));
    navigate("/products");
  }

  return (
    <form
      onSubmit={handleSubmit(createProductHandler)}
      className="flex
    flex-col gap-4 w-1/2"
    >
      <input
        {...register("image")}
        className="outline-0 border-b p-2"
        type="url"
        placeholder="image url"
      />
      <input
        {...register("title")}
        className="outline-0 border-b p-2"
        type="text"
        placeholder="title"
      />
      <input
        {...register("price")}
        className="outline-0 border-b p-2"
        type="number"
        placeholder="0.00"
      />
      <input
        {...register("category")}
        className="outline-0 border-b p-2"
        type="text"
        placeholder="category"
      />
      <textarea
        {...register("description")}
        className="outline-0 border-b p-2"
        placeholder="type description here"
      />
      <button className="px-3 py-1 hover:opacity-90 bg-blue-500 rounded">
        Create Product
      </button>
    </form>
  );
}

export default CreateProduct;
