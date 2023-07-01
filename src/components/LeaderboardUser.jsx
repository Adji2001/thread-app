import React from "react";

const LeaderboardUser = ({ user, score, num }) => {
  return (
    <div className="flex justify-between items-center px-2">
      <div className="flex items-center gap-3">
        <span className="inline-block text-4xl">{num}.</span>
        <img src={user.avatar} alt="avatar" className="rounded-full w-15" />
        <h3 className="text-xl font-bold">{user.name}</h3>
      </div>
      <div className="text-slate-400 text-xl font-semibold">{score} XP</div>
    </div>
  );
};

export default LeaderboardUser;
