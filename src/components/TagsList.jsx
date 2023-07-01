import React from "react";
import TagItem from "./TagItem";

const TagsList = ({ threads = [] }) => {
  return (
    <div className="py-5 px-3 flex min-w-fit gap-2">
      <h4 className="text-lg font-normal mr-3">Tag</h4>
      {threads.map((thread) => (
        <TagItem text={thread.category} />
      ))}
    </div>
  );
};

export default TagsList;
