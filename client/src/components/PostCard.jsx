import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="w-full flex justify-between gap-10 my-6 rounded-md border-2 border-slate-300 px-4 py-4 bg-slate-50 transition ease-in-out duration-75 cursor-pointer hover:shadow-lg">
      <div className="w-1/3">
        <img
          className="rounded-md "
          src="https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={post.id}
        />
      </div>
      <div className="w-2/3 flex flex-col justify-between">
        <div>
          <h1 className="font-semibold text-lg uppercase ">
            {" "}
            {post.title.slice(0, 50)}
          </h1>
          <p className="mt-6">{post.body.slice(0, 500)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-slate-400 font-semibold ">22/4/24 - 12:20 PM</p>
          <p className="text-slate-400 font-semibold ">@faisal</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
