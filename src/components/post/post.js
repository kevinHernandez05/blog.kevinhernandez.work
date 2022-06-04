import "./style.css";
import Markdown from "markdown-to-jsx";
import formatDate from "../../Utils/dateFormat";
import { Link } from "react-router-dom";

const Post = ({ post, content }) => {
  return (
    <>
      <main class="">
        <article>
          <Link to={"/"}>
            <div className="border h-10 pb-12 mt-4 w-24 mb-14 grid place-content-center">
              <span className="text-2xl mt-11"> {"<"} back </span>
            </div>
          </Link>
          <h1 class="text-4xl font-bold text-justify">{post.title}</h1>
          <h2 class="mt-2 text-sm text-gray-500">
            {post.user.login}
            <br />
            {formatDate(new Date(post.updated_at), "MMMM d, yyyy")}
          </h2>

          <div class="mt-6 text-justify">
            <Markdown>{content}</Markdown>
          </div>
        </article>
      </main>
    </>
  );
};

export default Post;
