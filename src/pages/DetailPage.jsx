import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveThreadDetail } from "../states/threadDetail/action";
import ThreadDetail from "../components/ThreadDetail";
import api from "../utils/api";
import CommentsList from "../components/CommentsList";

const DetailPage = () => {
  const { id } = useParams();
  const { detailThread = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
    console.log(detailThread);
  }, [id, dispatch]);

  if (!detailThread) {
    return null;
  }

  return (
    <div className="w-full pt-5 px-3 text-slate-100 max-h-full overflow-y-auto">
      <ThreadDetail {...detailThread} />
      {detailThread.comments.length > 0 && (
        <div className="w-full display" id="commentList">
          <CommentsList comments={detailThread.comments} />
        </div>
      )}
    </div>
  );
};

export default DetailPage;
