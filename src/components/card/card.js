import React from "react";
import Markdown from "markdown-to-jsx";
import formatDate from "../../Utils/dateFormat";
import urlSlugFormatter from "../../Utils/urlSlugFormatter";

import "./styles.css";
import { Link } from "react-router-dom";





const Card = ({ post }) => {

  let title = urlSlugFormatter(post.title);

  return (
    <div key={post.id} className="container sm:px-32 md:px-42 xl:px-64 mx-auto">
      <Link
        to={{
          pathname: `/post/${title}/${post.number}`,
          state: [title, post.number],
        }}
      >
        <div className="p-4">
          <div className="card h-full border-2 border-gray-200 rounded-lg overflow-hidden grid-cols-1 lg:grid-cols-2">
            <div className="p-6">
              {/* Post Title */}
              <h3 className="leading-relaxed mb-3 text-2xl">{post.title}</h3>

              {/* Post Tags */}
              <div className="mb-9">
                <h1 className="tracking-widest text-lg title-font font-medium text-gray-500 mb-1">
                  {post.labels.map((label, index) => {
                    if (label.name !== "blog") {
                      return (
                        <span className={"text-black p-2 bg-white"} key={index}>
                          #{label.name}
                        </span>
                      );
                    }
                  })}
                </h1>
              </div>

              {/* Card's information */}
              <h3 className="card-description tracking-widest text-lg title-font font-medium text-gray-400 mb-1">
                <Markdown>{post.body}</Markdown>
              </h3>

              {/* Published date */}
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
      </Link>
    </div>
  );
};

export default Card;
