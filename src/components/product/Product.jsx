import React from "react";
import { useGetProductsQuery } from "../../context/slice/ProductApi";
import { Link } from "react-router-dom";

const Product = () => {
  const { data } = useGetProductsQuery({ limit: 50 });
  const card = data?.data?.products?.map((product) => (
    <div className="card" key={product.id}>
      <img src={product.urls[0]} alt="" />
      <Link to={`/products/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      <b>$ {product.price}</b>
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
