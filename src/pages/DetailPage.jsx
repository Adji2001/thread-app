import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveThreadDetail } from "../states/threadDetail/action";
import ThreadDetail from "../components/ThreadDetail";
import CommentsList from "../components/CommentsList";
import { asyncAddComment } from "../states/threadComment/action";
// import { asyncReceiveComment } from "../states/threadComment/action";

const DetailPage = () => {
  const { id } = useParams();
  const { detailThread = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
    // dispatch(asyncReceiveComment(detailThread));
  }, [id, dispatch]);

  const onAddComment = ({ content }) => {
    dispatch(asyncAddComment({ content }));
    dispatch(asyncReceiveThreadDetail(id));
  };

  if (!detailThread) {
    return null;
  }

  return (
    <div className="w-full pt-5 px-3 text-slate-100 max-h-full overflow-y-auto">
      <ThreadDetail {...detailThread} authUser={authUser.id} />
      <div className="w-full" id="commentList">
        <CommentsList
          addComment={onAddComment}
          comments={detailThread.comments}
          threadId={detailThread.id}
          authUser={authUser ? authUser.id : null}
        />
      </div>
    </div>
  );
};

export default DetailPage;
