import React, { useState } from "react";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { postedAt } from "../utils";
import HTMLReactParser from "html-react-parser";
import TagItem from "./TagItem";
import api from "../utils/api";
import { useDispatch } from "react-redux";
import { asyncUpVoteThread } from "../states/threads/action";

const ThreadDetail = ({
  id,
  title,
  body,
  category = "",
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
  authUser,
}) => {
  // var like dan dislike
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  // const [upVote, setUpVote] = useState(upVotesBy);
  const dispatch = useDispatch();
  const isUpVote = upVotesBy.includes(authUser);

  // console.log("upVotes: ", upVote);

  // logika like
  // const toggleBlue = async () => {
  //   const vote = await api.upVoteThread(id);
  //   setUpVote([...upVotesBy, vote.userId]);
  //   console.log("vote", vote);

  //   if (like === false && dislike === false) {
  //     document.getElementById("blueLike").classList.add("blueLike");
  //     document.getElementById("redLike").classList.remove("redLike");
  //     setLike(true);
  //   }

  //   if (like === true && dislike === false) {
  //     document.getElementById("blueLike").classList.remove("blueLike");
  //     setLike(false);
  //   }

  //   if (dislike === true) {
  //     document.getElementById("blueLike").classList.add("blueLike");
  //     document.getElementById("redLike").classList.remove("redLike");
  //     setDislike(false);
  //     setLike(true);
  //   }
  // };
  const toggleBlue = (e) => {
    e.stopPropagation();
    dispatch(asyncUpVoteThread(id));
  };

  // logika dislike
  const toggleRed = () => {
    if (like === false && dislike === false) {
      document.getElementById("redLike").classList.add("redLike");
      document.getElementById("blueLike").classList.remove("blueLike");
      setDislike(true);
    }

    if (like === false && dislike === true) {
      document.getElementById("redLike").classList.remove("redLike");
      setDislike(false);
    }

    if (like === true) {
      document.getElementById("redLike").classList.add("redLike");
      document.getElementById("blueLike").classList.remove("blueLike");
      setLike(false);
      setDislike(true);
    }
  };

  // console.log("like: ", like);
  // console.log("dislike: ", dislike);

  // const toggleDisplay = () => {
  //   const comments = document.getElementById("commentList");
  //   comments.classList.toggle("display");
  // };

  // let harga = [5000, 1000, 2000, 6000];
  // let total = harga.reduce((val, nilaiSekarang) => {
  //   return val + nilaiSekarang;
  // }, 0);
  // console.log(total);

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
          {isUpVote ? (
            <AiTwotoneLike
              className="text-xl inline-block text-blue-500"
              id="blueLike"
            />
          ) : (
            <AiTwotoneLike className="text-xl inline-block" id="blueLike" />
          )}{" "}
          {upVotesBy.length}
        </button>
        <button onClick={toggleRed}>
          <AiTwotoneDislike className="text-xl inline-block" id="redLike" />{" "}
          {downVotesBy.length}
        </button>
        <button>
          <FaCommentDots className="text-xl inline-block" /> See comments (
          {comments.length})
        </button>
      </div>
    </div>
  );
};

export default ThreadDetail;
