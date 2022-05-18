import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import Post from "../components/post/post";

const BlogPost = ({ po }) => {
  const { id } = useParams();

  const [post, setPost] = useState([]);
  const [postLoaded, setPostLoaded] = useState(false);

  const fetchPost = async () => {
    try {
      let response = await fetch(
        `https://api.github.com/repos/kevinHernandez05/kevin-blog/issues/${id}`
      );
      let json = await response.json();
      return { success: true, data: json };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  };

  useEffect(() => {
    (async () => {
      setPostLoaded(false);

      let res = await fetchPost();

      if (res.success) {
        setPost(res.data);
        setPostLoaded(true);

        post.body = <Markdown>{post.body}</Markdown>;
      }
    })();
  }, []);

  return <Post post={post} />;
};

export default BlogPost;
