import React from "react";
import Markdown from "markdown-to-jsx";
import formatDate from "../../Utils/dateFormat";

const Card = ({ post }) => {
  return (
    <div className="container sm:px-32 md:px-42 xl:px-64 mx-auto">
      <div className="p-4">
        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden grid-cols-1 lg:grid-cols-2">
          {/* <img
            className="h-full w-full object-cover object-center"
            src="https://camo.githubusercontent.com/cc42c1358f33e518bb1f3353bd1ce7984940b49635943a409cd45521c9c6ca8e/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a566661486b57627144757068725171582e6a7067"
            alt="Proyecto"
          ></img> */}
          <div className="p-6">
            {/* Post Title */}
            <p className="leading-relaxed mb-3">{post.title}</p>

            {/* Post Tags */}
            <div className="mb-9">
              <h1 className="tracking-widest text-lg title-font font-medium text-gray-500 mb-1">
                {post.labels.map((label, index) => {
                  return <span key={index}>#{label.name} </span>;
                })}
              </h1> 
            </div>

            {/* Information */}
            <h1 className="tracking-widest text-lg title-font font-medium text-gray-500 mb-1">
              <Markdown>{post.body}</Markdown>
            </h1>
            <div className="flex items-center flex-wrap ">
              <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                {formatDate(
                  new Date(post.updated_at),
                  "EEEE, MMMM d, yyyy HH:mm:ss aaa"
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
