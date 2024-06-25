import React from "react";
import Product from "../../components/product/Product";
import Products from "../products/Products";

const Home = () => {
  let userData = JSON.parse(localStorage.getItem("user-data"));
  return (
    <div>
      {userData?.role === "owner" ? (
        <>
          <Product />
        </>
      ) : (
        <Product />
      )}
    </div>
  );
};

export default Home;
