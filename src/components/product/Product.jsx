import React from "react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../context/slice/ProductApi";
import { Link } from "react-router-dom";

const Product = ({ isAdmin }) => {
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };

  const { data } = useGetProductsQuery({ limit: 52 });
  const card = data?.data?.products?.map((product) => (
    <div className="card" key={product.id}>
      <img src={product.urls[0]} alt="" />
      <Link to={`/products/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      <b>$ {product.price}</b>
      {isAdmin ? (
        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
      ) : (
        <></>
      )}
    </div>
  ));
  console.log(data?.data?.products);
  return (
    <section className="product">
      <div className="container">
        <div className="cards">{card}</div>
      </div>
    </section>
  );
};

export default Product;
