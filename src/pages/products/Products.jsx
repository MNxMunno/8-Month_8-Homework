import React from "react";
import CreateProduct from "../../components/createProduct/CreateProduct";

const Products = () => {
  return (
    <div>
      <CreateProduct isAdmin={true} />
    </div>
  );
};

export default Products;
