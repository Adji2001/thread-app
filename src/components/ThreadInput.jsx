import React, { useState } from "react";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { asyncAddThread } from "../states/threads/action";

const ThreadInput = () => {
  const [title, setTitle, handleTitle] = useInput();
  const [category, setCategory, handleCategory] = useInput();
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  function addThread(e) {
    e.preventDefault();
    dispatch(asyncAddThread({ title, body, category }));
    setTitle("");
    setCategory("");
    setBody("");
  }

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitle}
        className="w-4/6 h-14 p-2 rounded bg-slate-900 border"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={handleCategory}
        className="w-4/6 h-14 p-2 rounded bg-slate-900 border"
      />
      <div
        className="w-4/6 h-40 p-2 border roundedd"
        data-placeholder="Body thread ..."
        value={body}
        onInput={(e) => setBody(e.target.innerHTML)}
        contentEditable
      ></div>
      <button
        onClick={addThread}
        className="w-4/6 h-16 bg-blue-600 rounded text-2xl font-semibold"
      >
        Create
      </button>
    </div>
  );
};

export default ThreadInput;
