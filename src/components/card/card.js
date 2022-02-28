import React from "react";

const Card = ({ post, index }) => {
  return (
    <div class="container sm:px-32 md:px-42 xl:px-64 mx-auto">
      <div class="p-4" key={index}>
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden grid-cols-1 lg:grid-cols-2">
          {/* <img
            class="h-full w-full object-cover object-center"
            src="https://camo.githubusercontent.com/cc42c1358f33e518bb1f3353bd1ce7984940b49635943a409cd45521c9c6ca8e/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a566661486b57627144757068725171582e6a7067"
            alt="Proyecto"
          ></img> */}
          <div class="p-6">
            <p class="leading-relaxed mb-3">{post.title}</p>
            <h1 class="tracking-widest text-lg title-font font-medium text-gray-500 mb-1">
              {post.labels.map((label, index) => {
                return <span>#{label.name} </span>;
              })}
            </h1>
            <h1 class="tracking-widest text-lg title-font font-medium text-gray-500 mb-1">
              {post.body.slice(0, 150)}...
            </h1>
            <div class="flex items-center flex-wrap ">
              <p class="text-gray-500 inline-flex items-center text-lg">
                not url at the moment.
              </p>
              <span class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                {post.updated_at}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
