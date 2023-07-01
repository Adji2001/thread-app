import React, { useState } from "react";
import useInput from "../hooks/useInput";

const LoginInput = ({ login }) => {
  const [email, setEmail, handleEmail] = useInput();
  const [password, setPassword, handlePassword] = useInput();

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmail}
        className="w-4/6 h-14 p-2 rounded bg-slate-900 border"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePassword}
        className="w-4/6 h-14 p-2 rounded bg-slate-900 border"
      />
      <button
        onClick={() => login({ email, password })}
        className="w-4/6 h-14 bg-blue-600 rounded text-2xl font-semibold mt-2"
      >
        Login
      </button>
    </div>
  );
};

export default LoginInput;
