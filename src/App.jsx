import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "./scss/main.scss";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Product from "./components/product/Product";
import Header from "./components/headet/Header";
import CreateProduct from "./components/createProduct/CreateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Detail from "./components/detail/Detail";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="home" element={<Home />} />
          <Route path="CreateProducts" element={<CreateProduct />} />
          <Route path="products/:id" element={<Detail />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
