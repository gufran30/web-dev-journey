import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Products() {
  const products = useSelector((state) => state.productReducer.productValue);
  console.log(products);

  const renderProducts = products.map((product) => {
    return (
      <div
        key={product.id}
        className="w-70 p-6 rounded-lg bg-zinc-900 m-4 group transition-all duration-400 hover:inset-shadow-amber-400/45 hover:ring-3 ring-zinc-400 hover:shadow-xl"
      >
        <img
          className="w-60 h-60 mx-auto  rounded object-cover object-center transition-all duration-300 group-hover:scale-104"
          src={product.image}
          alt=""
        />
        <h1 className="text-md group-hover:text-zinc-200 font-bold mt-3">
          {product.title.substring(0, 40)}
        </h1>
        <h2 className="text-md group-hover:text-zinc-400 font-medium mt-5">
          <strong>Price: </strong>${product.price}
        </h2>
        {/* <h3 className="text-md text-zinc-300 font-medium mt-2"><strong>Category:</strong>{product.category}</h3> */}
        <h3 className="text-md group-hover:text-zinc-400 font-medium mt-1">
          <strong>Description: </strong>
          {product.description.substring(0, 100)}...
          <span className="text-bold text-sm">more</span>
        </h3>
      </div>
    );
  });

  return (
    <div>
      {products.length > 0 ? (
        <div className="products-card flex flex-wrap">
          {renderProducts}
        </div>
      ) : (
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-xl text-zinc-300 mb-2">
              Product doesn't exist yet.
            </h1>
            <Link
              className="bg-blue-500 text-sm px-3 py-2 rounded hover:opacity-90 border-none outline-none"
              to="/admin/create-product"
            >
              Create Product
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
