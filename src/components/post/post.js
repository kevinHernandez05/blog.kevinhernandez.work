import "./style.css";
import Markdown from "markdown-to-jsx";
import formatDate from "../../Utils/dateFormat";


const Post = ({ post, content }) => {
  return (
    <>
      <div class="relative -mx-4 top-0 pt-[17%] overflow-hidden">
        <img
          class="absolute inset-0 object-cover object-top w-full h-full filter blur"
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uY2VydCUyMHBvc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
          alt=""
        />
      </div>
      <main class="relative container mx-auto px-4">
        <div class="mt-[-10%] w-1/2 mx-auto">
          <div class="relative pt-[56.25%] overflow-hidden rounded-2xl">
            <img
              class="w-full h-full absolute inset-0 object-cover"
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uY2VydCUyMHBvc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt=""
            />
          </div>
        </div>

        <article class="max-w-prose mx-auto py-8">
          <h1 class="text-4xl font-bold text-justify">{post.title}</h1>
          <h2 class="mt-2 text-sm text-gray-500">
            {post.user.login} ; {formatDate(
                  new Date(post.updated_at),
                  "EEEE, MMMM d, yyyy HH:mm:ss aaa"
                )} 
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
