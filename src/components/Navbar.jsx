import React from "react";
import { Link } from "react-router-dom";
import { PiWechatLogoBold } from "react-icons/pi";
import { MdOutlineLeaderboard, MdOutlinePostAdd } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = ({ authUser, logout }) => {
  const { name, avatar } = authUser;

  return (
    <nav className="bg-slate-900 text-slate-100 text-lg font-medium w-1/5 h-full border-r-[1px] border-slate-600">
      <div className="w-5/6 h-fit my-5 ml-3 text-base text-blue-400 flex justify-between items-center">
        <div className="flex gap-2 h-fit">
          <img
            src={avatar}
            alt={name}
            title={name}
            className="w-6 rounded-full"
          />
          <h1 className="mr-2 dotsTitle">{name}</h1>
        </div>
        <button
          onClick={logout}
          title="Logout"
          className="rounded-full p-1 hover:bg-slate-700 hover:text-red-600 text-red-500"
        >
          <AiOutlineLogout className="text-2xl" />
        </button>
      </div>
      <ul className="flex flex-col gap-5">
        <Link to="/">
          <li className="hover:bg-slate-800 py-3 pl-3">
            <PiWechatLogoBold className="text-2xl inline mb-1 mr-2" /> Threads
          </li>
        </Link>
        <Link to="/leaderboard">
          <li className="hover:bg-slate-800 py-3 pl-3">
            <MdOutlineLeaderboard className="text-2xl inline mb-1 mr-2" />
            Leaderboards
          </li>
        </Link>
        <Link to="/create">
          <li className="hover:bg-slate-800 py-3 pl-3">
            <MdOutlinePostAdd className="text-2xl inline mb-1 mr-2" />
            Create
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
