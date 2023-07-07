import React from "react";
import { IoSend } from "react-icons/io5";
import useInput from "../hooks/useInput";

const CommentInput = ({ addComment }) => {
  const [comment, setComment, handleComment] = useInput();

  return (
    <div className="border border-slate-500 flex justify-around rounded my-2">
      <input
        type="text"
        placeholder="Write your comment ..."
        value={comment}
        onChange={handleComment}
        className="py-1 px-2 outline-none bg-transparent h-10 w-11/12"
      />
      <button
        type="submit"
        onClick={() => addComment({ content: comment })}
        className="text-blue-500 text-3xl"
      >
        <IoSend />
      </button>
    </div>
  );
};

export default CommentInput;
