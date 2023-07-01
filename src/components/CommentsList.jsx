import React from "react";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";

const CommentsList = ({ comments }) => {
  return (
    <div className="bg-slate-700 mt-3 py-2 px-5">
      <CommentInput />
      <h1 className="text-xl font-semibold text-center border-b-2 border-slate-600 pb-2 mx-16">
        Comments
      </h1>
      {comments.map((comment) => (
        <CommentItem {...comment} />
      ))}
    </div>
  );
};

export default CommentsList;
