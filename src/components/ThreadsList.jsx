import React from "react";
import ThreadItem from "./ThreadItem";

const ThreadsList = ({ threads }) => {
  return (
    <div>
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} />
      ))}
    </div>
  );
};

export default ThreadsList;
