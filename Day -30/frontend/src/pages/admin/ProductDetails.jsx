import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../../store/actions/productAction";

function ProductDetails() {
  const { id } = useParams();
  // console.log(id);
  const {
    productReducer: { productValue },
    userReducer: { userValue },
  } = useSelector((state) => state);
  const product = productValue?.find((prod) => prod.id == id);
  console.log(product, userValue);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: product?.title,
      image: product?.image,
      price: product?.price,
      description: product?.description,
    },
  });

  const dispatch = useDispatch();

  function updateProductHandler(product) {
    dispatch(asyncUpdateProduct(id, product));
  }

  const navigate = useNavigate();
  function DeleteHandler(id) {
    dispatch(asyncDeleteProduct(id));
    navigate("/products");
  }

  return product ? (
    <div className="overflow-auto">
      <div className="w-full flex gap-5 bg-zinc-900 p-5 mb-10">
        <img className="w-1/2 h-1/2 object-cover" src={product.image} alt="" />
        <div className="">
          <h1 className="font-thin text-3xl">{product.title}</h1>
          <div className="flex justify-between items-center">
            <h2 className="text-xl mt-4 text-zinc-300 font-thin">
              ${product.price}
            </h2>
            <button className="px-3 py-1 bg-stone-600 mt-5 active:scale-98 transition-all duration-100 hover:opacity-95">
              Add to cart
            </button>
          </div>
          <p className="text-md mt-10 text-zinc-300">{product.description}</p>
        </div>
      </div>
      {userValue && userValue?.isAdmin && (
        <div className="for_Update mb-10 text-center">
          <form
            onSubmit={handleSubmit(updateProductHandler)}
            className="flex 
    flex-col gap-4 w-3/4 mx-auto"
          >
            <h2 className="font-thin text-5xl my-5 text-zinc-300 text-center ">
              <span className="text-blue-400">Update</span> Product
            </h2>

            <input
              {...register("image")}
              className="outline-0 border-b p-2 focus:bg-zinc-900"
              type="url"
              placeholder="image url"
            />
            <input
              {...register("title")}
              className="outline-0 border-b p-2 focus:bg-zinc-900"
              type="text"
              placeholder="title"
            />
            <input
              {...register("price")}
              className="outline-0 border-b p-2 focus:bg-zinc-900"
              type="number"
              placeholder="0.00"
            />
            {/* <input
            {...register("category")}
            className="outline-0 border-b p-2 focus:bg-zinc-900"
            type="text"
            placeholder="category"
          /> */}

            <textarea
              {...register("description")}
              className="outline-0 border-b p-2 focus:bg-zinc-900 h-30"
              placeholder="type description here"
            />
            <button className="mx-auto px-3 mt-5 py-1 hover:opacity-90 bg-blue-500 rounded active:scale-98 transition-all duration-100">
              Update Product
            </button>
            <button
              type="button"
              onClick={() => DeleteHandler(id)}
              className="px-3 mt-5 mx-auto  py-1 hover:opacity-90 bg-red-500 rounded active:scale-98 transition-all duration-100"
            >
              Delete Product
            </button>
          </form>
        </div>
      )}
    </div>
  ) : (
    "Product Loading...."
  );
}

export default ProductDetails;
