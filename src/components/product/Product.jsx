import React from "react";
import { useGetProductsQuery } from "../../context/slice/ProductApi";

const Product = () => {
  const { data } = useGetProductsQuery({ limit: 50 });
  const card = data?.data?.products?.map((product) => (
    <div className="card" key={product.id}>
      <img src={product.urls[0]} alt="" />
      <h3>{product.title}</h3>
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
