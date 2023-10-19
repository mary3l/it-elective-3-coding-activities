// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function Post({ title, body }) {
  return (
    <div className="p-4 bg-white border border-gray-400/30 w-[250px] flex flex-col justify-center items-center">
      <h4 className="text-2xl font-bold">{title}</h4>
      <h4>{body}</h4>
    </div>
  );
}

export default Post;
