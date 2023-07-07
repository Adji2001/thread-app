import React from "react";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";

const CommentsList = ({ addComment, comments, authUser }) => {
  return (
    <div className="bg-slate-700 mt-3 py-2 px-5 min-h-screen">
      <CommentInput addComment={addComment} />
      <h1 className="text-xl font-semibold text-center border-b-2 border-slate-600 pb-2 mx-16">
        Comments
      </h1>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem key={comment.id} authUser={authUser} {...comment} />
        ))
      ) : (
        <p>there is no comments</p>
      )}
    </div>
  );
};

export default CommentsList;
