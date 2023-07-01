import React from "react";
import ThreadInput from "../components/ThreadInput";

const CreatePage = () => {
  return (
    <div className="text-slate-100 w-full">
      <h1 className="text-2xl font-bold my-5 text-center">Create New Thread</h1>
      <ThreadInput />
    </div>
  );
};

export default CreatePage;
