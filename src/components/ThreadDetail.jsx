import React from "react";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { postedAt } from "../utils";
import HTMLReactParser from "html-react-parser";
import TagItem from "./TagItem";

const ThreadDetail = ({
  title,
  body,
  category = "",
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
}) => {
  const toggleBlue = () => {
    document.getElementById("blueLike").classList.toggle("blueLike");
  };

  const toggleRed = () => {
    document.getElementById("redLike").classList.toggle("redLike");
  };

  const toggleDisplay = () => {
    const comments = document.getElementById("commentList");
    comments.classList.toggle("display");
  };

  return (
    <div>
      {/* profile */}
      <div className="flex items-center gap-1">
        <img src={owner.avatar} alt="halo" className="rounded-full w-10" />
        <h3 className="text-base font-semibold">{owner.name}</h3>
        <span className="font-normal text-slate-400 text-xs">
          ▫ {postedAt(createdAt)}
        </span>
      </div>
      {/* body */}
      <div className="mt-2">
        <h3 className="text-2xl text-blue-200 font-bold">{title}</h3>
        <p>{HTMLReactParser(body)}</p>
        <div className="my-3 flex gap-2">
          <TagItem text={category} />
        </div>
      </div>
      {/* footer */}
      <div className="flex items-center gap-5">
        <button onClick={toggleBlue}>
          <AiTwotoneLike className="text-xl inline-block" id="blueLike" />{" "}
          {upVotesBy.length}
        </button>
        <button onClick={toggleRed}>
          <AiTwotoneDislike className="text-xl inline-block" id="redLike" />{" "}
          {downVotesBy.length}
        </button>
        <button onClick={toggleDisplay}>
          <FaCommentDots className="text-xl inline-block" /> See comments (
          {comments.length})
        </button>
      </div>
    </div>
  );
};

export default ThreadDetail;
