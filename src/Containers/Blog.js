import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

import LoadingCard from "../components/card/loadingCard";
import Card from "../components/card/card";

const Blog = () => {
  //url: GET > https://api.github.com/repos/kevinHernandez05/kevin-blog/issues

  const [posts, setPost] = useState([]);
  const [postLoaded, setPostLoaded] = useState(false);

  const fetchPost = async () => {
    try {
      let response = await fetch(
        "https://api.github.com/repos/kevinHernandez05/kevin-blog/issues"
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
      }
    })();
  }, []);

  return !postLoaded ? (
    <LoadingCard />
  ) : (
    <div className="mt-24">
      {posts.map((post, index) => {
        return <Card post={post} key={index} />;
      })}
    </div>
  );
};

export default Blog;
