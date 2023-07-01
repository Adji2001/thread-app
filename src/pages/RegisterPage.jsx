import React from "react";
import RegisterInput from "../components/RegisterInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../states/users/action";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate("/");
  };

  return (
    <div className="text-slate-100 w-full flex flex-col justify-evenly h-5/6 bg-slate-900 border rounded-md my-auto">
      <h1 className="text-4xl font-bold text-center">Register Page</h1>
      <RegisterInput register={onRegister} />
      <p className="text-center">
        Don't have an account?{" "}
        <Link to="/login" className="text-blue-400">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
