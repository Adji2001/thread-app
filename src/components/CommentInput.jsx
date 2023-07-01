import React from "react";
import { IoSend } from "react-icons/io5";

const CommentInput = () => {
  return (
    <div className="border border-slate-500 flex justify-around rounded my-2">
      <input
        type="text"
        placeholder="Write your comment ..."
        className="py-1 px-2 outline-none bg-transparent h-10 w-11/12"
        autoFocus={false}
      />
      <button className="text-blue-500 text-3xl">
        <IoSend />
      </button>
    </div>
  );
};

export default CommentInput;
