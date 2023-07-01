import React, { useEffect } from "react";
import TagsList from "../components/TagsList";
import { useDispatch, useSelector } from "react-redux";
import ThreadsList from "../components/ThreadsList";
import { asyncPopulateUsersAndThreadsAndLeaderboards } from "../states/shared/action";

const ThreadPage = () => {
  const { threads = [], users = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreadsAndLeaderboards());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  return (
    <div className="py-3 text-slate-100 w-full max-h-full overflow-y-auto overflow-x-hidden">
      <TagsList threads={threads} />
      <div className="w-full">
        <ThreadsList threads={threadList} />
      </div>
    </div>
  );
};

export default ThreadPage;
