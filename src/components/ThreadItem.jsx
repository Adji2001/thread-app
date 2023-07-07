import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDislike, AiTwotoneLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import TagItem from "./TagItem";
import { postedAt } from "../utils";
import HTMLReactParser from "html-react-parser";

const ThreadItem = ({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  user,
}) => {
  // let harga = [5000, 1000, 2000, 6000];
  let like = upVotesBy.reduce((val, nilaiSekarang) => {
    return val + nilaiSekarang;
  }, 0);

  console.log("votes: ", upVotesBy);
  console.log("like: ", like);

  return (
    <div className="border-t-2 border-slate-600 pb-5 px-3 pt-3">
      {/* profile */}
      <div className="flex items-center gap-1">
        <img src={user.avatar} alt="avatar" className="rounded-full w-10" />
        <h3 className="text-base font-semibold">{user.name}</h3>
        <span className="font-normal text-slate-400 text-xs">
          ▫ {postedAt(createdAt)}
        </span>
      </div>
      {/* body */}
      <div className="mt-2">
        <Link
          className="text-2xl text-blue-200 font-bold dotsTitle"
          to={`/threads/${id}`}
        >
          {title}
        </Link>
        <p className="dotsBody">{HTMLReactParser(body)}</p>
        <div className="my-3 flex gap-2">
          <TagItem text={category} />
        </div>
      </div>
      {/* footer */}
      <div className="flex items-center gap-5">
        <button>
          <AiTwotoneLike className="text-xl inline-block" /> {upVotesBy.length}
        </button>
        <button>
          <AiOutlineDislike className="text-xl inline-block" />{" "}
          {downVotesBy.length}
        </button>
        <button>
          <FaRegComment className="text-xl inline-block" /> {totalComments}
        </button>
      </div>
    </div>
  );
};

export default ThreadItem;
