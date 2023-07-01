import React, { useEffect } from "react";
import LeaderboardUser from "../components/LeaderboardUser";
import { useDispatch, useSelector } from "react-redux";
import { asyncPopulateUsersAndThreadsAndLeaderboards } from "../states/shared/action";

const LeaderboardPage = () => {
  const { leaderboards = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreadsAndLeaderboards());
  }, [dispatch]);

  return (
    <div className="text-slate-100 w-full py-3">
      <h1 className="text-center text-4xl text-blue-100 font-semibold">
        Leaderboard
      </h1>
      <p className="text-center text-xl text-slate-200 font-medium">
        Pengguna Aktif
      </p>

      <div className="w-5/6 flex flex-col gap-5 pb-2 mx-auto mt-5 max-h-[calc(100%-80px)] overflow-y-auto">
        {leaderboards.map((Leaderboard, i) => (
          <LeaderboardUser
            key={Leaderboard.user.id}
            {...Leaderboard}
            num={i + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderboardPage;
