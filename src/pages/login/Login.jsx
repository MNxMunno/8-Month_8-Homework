import React from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import axios from "../../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  UserName: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/auth/sign-in", formData)
      .then((res) => {
        localStorage.setItem("x-auth-token", res.data.data.token);
        localStorage.setItem("user-data", JSON.stringify(res.data.data.user));
        navigate("/home");
        toast.success("Login Successful");
      })
      .catch((err) => {
        console.log(err);
        toast.error("UserName is incorrect");
      });

    setFormData(initialState);
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="UserName">
        UserName
        <input
          type="text"
          name="UserName"
          value={formData.UserName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button>Login</button>
    </form>
  );
};

export default Login;
