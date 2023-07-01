import React from "react";
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../states/authUser/action";

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <div className="text-slate-100 w-full flex flex-col justify-evenly h-4/6 bg-slate-900 border rounded-md my-auto">
      <h1 className="text-4xl font-bold text-center">Login Page</h1>
      <LoginInput login={onLogin} />
      <p className="text-center">
        Already have an account?{" "}
        <Link to="/register" className="text-blue-400">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
