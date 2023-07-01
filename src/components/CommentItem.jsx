import React from "react";
import { postedAt } from "../utils";
import { AiOutlineDislike, AiTwotoneLike } from "react-icons/ai";
import HTMLReactParser from "html-react-parser";

const CommentItem = ({ owner, content, createdAt, upVotesBy, downVotesBy }) => {
  return (
    <div className="my-5">
      {/* profile */}
      <div className="flex items-center gap-2 pt-2">
        <img src={owner.avatar} alt="halo" className="rounded-full w-8" />
        <h3 className="text-base font-semibold">{owner.name}</h3>
        <span className="font-normal text-slate-400 text-xs">
          ▫ {postedAt(createdAt)}
        </span>
      </div>
      {/* body */}
      <div className="mt-2">
        <p>{HTMLReactParser(content)}</p>
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
      </div>
    </div>
  );
};

export default CommentItem;
