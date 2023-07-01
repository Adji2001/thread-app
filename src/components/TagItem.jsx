import React from "react";

const TagItem = ({ text }) => {
  return (
    <span className="text-slate-300 px-2 py-1 border rounded-md">#{text}</span>
  );
};

export default TagItem;
