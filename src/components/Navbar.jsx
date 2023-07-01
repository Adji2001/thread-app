import React from "react";
import { Link } from "react-router-dom";
import { PiWechatLogoBold } from "react-icons/pi";
import { MdOutlineLeaderboard, MdOutlinePostAdd } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-slate-100 text-lg font-medium w-1/6 h-full border-r-[1px] border-slate-600">
      <h1 className="mt-2 mb-5 ml-3 text-base text-blue-400">Eden Adji</h1>
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
